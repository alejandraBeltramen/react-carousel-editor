import React, { useState, useEffect } from 'react';
import './CarouselManager.scss';
import Button from '../../ui-core/Button/Button';
import Carousel from '../../ui-core/Carousel/Carousel';
import ToggleButton from '../../ui-core/ToggleButton/ToggleButton';
import Dropdown from '../../ui-core/Dropdown/Dropdown';
import { sortArrayBy } from '../../utils/common';
import Section from '../../ui-core/Section/Section';
import { CAROUSEL, REMOVE, EDIT_MODE, VIEW_MODE } from '../../localization/english';
import {
  IMAGES_PER_TIME,
  IMAGE_CAPTION_PROPERTY,
  DEFAULT_IMAGES_PER_TIME,
  DEFAULT_EDITION_MODE
} from '../../constants/CarouselEditorConstants';

const CarouselManager = (props) => {
  const [ isEditMode, setIsEditMode ] = useState(DEFAULT_EDITION_MODE);
  const [ imagesPerTime, setImagesPerTime ] = useState(DEFAULT_IMAGES_PER_TIME);
  const [ selectedAmount, setSelectedAmount ] = useState(0);
  const [ images, setImages ] = useState([]);

  useEffect(() => {
    setImages(sortArrayBy(props.images, IMAGE_CAPTION_PROPERTY));
  }, [props.images]);
  
  const imageClickHandler = (clickedImage) => {
    if(!isEditMode) {
      return props.onImageClick(clickedImage);
    }

    clickedImage.isSelected = !clickedImage.isSelected;
    updateSelectedAmount(clickedImage);
  }

  const updateSelectedAmount = (image) => {
    image.isSelected
      ? setSelectedAmount(selectedAmount+1)
      : setSelectedAmount(selectedAmount-1);
  }

  const removeHandler = () => {
    const imagesToRemove = [];
    const imagesToRemain = [];
    images.forEach((image) => {
      image.isSelected ? imagesToRemove.push(image) : imagesToRemain.push(image);
    });
    setImages(imagesToRemain);
    setSelectedAmount(0);

    return props.onRemoveImages(imagesToRemove, imagesToRemain);
  }

  const toggleModeHandler = () => {
    unselectImages();
    setIsEditMode(!isEditMode);
  }

  const unselectImages = () => {
    images.forEach(image => image.isSelected = false);
    setSelectedAmount(0);
  }

  const actions = (
    <>
      <ToggleButton onToggleClick={toggleModeHandler}>
        { isEditMode ? EDIT_MODE : VIEW_MODE }
      </ToggleButton>
      <Dropdown items={IMAGES_PER_TIME} onChange={(amount) => setImagesPerTime(amount)}/>
      { 
        isEditMode
          ? <Button onClick={removeHandler}
                    isDisabled={selectedAmount === 0}>
            { REMOVE }
          </Button>
          : null
      }
    </>
  );

  const body = (
    <div className="cm__carousel">
      <Carousel images={images}
                itemsToDisplay={imagesPerTime}
                isCaptionVisible={!isEditMode}
                onImageClick={(clickedImage) => imageClickHandler(clickedImage)}
                isCaptionInside/>
    </div>
  );

  return (
    <div className="carousel-manager">
      <Section title={CAROUSEL}
               actions={actions}
               body={body}/>
    </div>
  );
};

export default CarouselManager;
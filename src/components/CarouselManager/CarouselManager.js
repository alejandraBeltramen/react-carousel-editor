import React, { useState, useEffect } from 'react';
import './CarouselManager.scss';
import Button from '../../ui-core/Button/Button';
import Carousel from '../../ui-core/Carousel/Carousel';
import ToggleButton from '../../ui-core/ToggleButton/ToggleButton';
import Dropdown from '../../ui-core/Dropdown/Dropdown';
import { sortArrayBy } from '../../utils/common';

const REMOVE = 'Remove';
const EDIT_MODE = 'Edit Mode';
const VIEW_MODE = 'View Mode';
const IMAGES_PER_TIME = [ 2, 3, 4, 5 ];

const CarouselManager = (props) => {
  const [ isEditMode, setIsEditMode ] = useState(false);
  const [ imagesPerTime, setImagesPerTime ] = useState(2);
  const [ selectedAmount, setSelectedAmount ] = useState(0);
  const [ images, setImages ] = useState([]);

  useEffect(() => {
    setImages(sortArrayBy(props.images, 'imageCaption'));
  }, [props.images]);
  
  const imageClickHandler = (clickedImage) => {
    if(!isEditMode) {
      return props.onImageClick(clickedImage);
    }

    clickedImage.isSelected = !clickedImage.isSelected;
    updateSelectedAmount(clickedImage);
  }

  const updateSelectedAmount = (image) => {
    if(image.isSelected) {
      setSelectedAmount(selectedAmount+1);
    } else {
      setSelectedAmount(selectedAmount-1);
    }
  }

  const removeHandler = () => {
    const imagesToRemove = [];
    const imagesToRemain = [];
    images.forEach((image) => {
      image.isSelected ? imagesToRemove.push(image) : imagesToRemain.push(image);
    });
    setImages(imagesToRemain);
    setSelectedAmount(0);

    return props.onRemoveImages(imagesToRemove);
  }

  const toggleModeHandler = () => {
    unselectImages();
    setIsEditMode(!isEditMode);
  }

  const unselectImages = () => {
    images.forEach(image => image.isSelected = false);
    setSelectedAmount(0);
  }

  return (
    <div className="carousel-manager">
      <div className="cm__title">Carousel</div>
      <div className="cm__actions">
        <ToggleButton onToggleClick={toggleModeHandler}>
          { isEditMode ? EDIT_MODE : VIEW_MODE }
        </ToggleButton>

        <Dropdown items={IMAGES_PER_TIME} onChange={(amount) => setImagesPerTime(amount)}/>

        { isEditMode ?
            <Button onClick={removeHandler} isDisabled={selectedAmount === 0}>{ REMOVE }</Button> :
            null
        }
      </div>

      <div className="cm__carousel">
        <Carousel images={images}
                  itemsToDisplay={imagesPerTime}
                  isCaptionVisible={!isEditMode}
                  onImageClick={(clickedImage) => imageClickHandler(clickedImage)}
                  isCaptionInside/>
      </div>
    </div>
  );
};

export default CarouselManager;
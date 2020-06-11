import React, { useState, useEffect } from 'react';
import './ImageSelector.scss';
import Card from '../../ui-core/Card/Card';
import Button from '../../ui-core/Button/Button';
import { sortArrayBy } from '../../utils/common';
import Section from '../../ui-core/Section/Section';
import { IMAGE_SELECTOR, ADD } from '../../localization/english';
import { IMAGE_CAPTION_PROPERTY } from '../../constants/CarouselEditorConstants';

const NO_IMAGES = [];
const NO_SELECTED_IMAGES = 0;

const ImageSelector = (props) => {
  const [ images, setImages ] = useState(NO_IMAGES);
  const [ selectedAmount, setSelectedAmount ] = useState(NO_SELECTED_IMAGES);

  useEffect(() => {
    setImages(sortArrayBy(props.images, IMAGE_CAPTION_PROPERTY));
  }, [props.images]);

  const imageClickHandler = (clickedImage) => {
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

  const addHandler = () => {
    const imagesToAdd = NO_IMAGES;
    const imagesToRemain = NO_IMAGES;
    images.forEach((image) => {
      image.isSelected ? imagesToAdd.push(image) : imagesToRemain.push(image);
    });
    setImages(imagesToRemain);
    setSelectedAmount(NO_SELECTED_IMAGES);

    return props.onAddImages(imagesToAdd, imagesToRemain);
  }

  const imagesToRender = images.map((image, index) => 
    <div className="is_container__card"
         key={index}>
      <Card source={image.imageName}
            caption={image.imageCaption}
            isSelected={image.isSelected}
            onImageClick={() => imageClickHandler(image)}
            isCaptionVisible/>
    </div>
  );

  const actions = (
    <div className="is__actions">
      <Button onClick={addHandler}
              isDisabled={selectedAmount === NO_SELECTED_IMAGES}>
        { ADD }
      </Button>
    </div>
  );

  const body = (
    <div className="is__container">
      { imagesToRender }
    </div>
  );

  return (
    <div className="image-selector">
      <Section title={IMAGE_SELECTOR}
               actions={actions}
               body={body}/>
    </div>
  );
};

export default ImageSelector;
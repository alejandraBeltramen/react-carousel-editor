import React, { useState, useEffect } from 'react';
import './ImageSelector.scss';
import Card from '../../ui-core/Card/Card';
import Button from '../../ui-core/Button/Button';
import { sortArrayBy } from '../../utils/common';
import Section from '../../ui-core/Section/Section';
import { IMAGE_SELECTOR, ADD } from '../../localization/english';
import { IMAGE_CAPTION_PROPERTY } from '../../constants/CarouselEditorConstants';

const ImageSelector = (props) => {
  const [ images, setImages ] = useState([]);
  const [ selectedAmount, setSelectedAmount ] = useState(0);

  useEffect(() => {
    setImages(sortArrayBy(props.images, IMAGE_CAPTION_PROPERTY));
  }, [props.images]);

  const imageClickHandler = (clickedImage, index) => {
    updateSelectedImage(clickedImage, index);
    updateSelectedAmount(clickedImage);
  }

  const updateSelectedImage = (clickedImage, index) => {
    const updatedImages = [ ...images ];
    updatedImages[index].isSelected = !clickedImage.isSelected;
    setImages(updatedImages);
  }

  const updateSelectedAmount = (image) => {
    image.isSelected 
      ? setSelectedAmount(selectedAmount+1)
      : setSelectedAmount(selectedAmount-1);
  }

  const addHandler = () => {
    const imagesToAdd = [];
    const imagesToRemain = [];
    images.forEach((image) => {
      image.isSelected ? imagesToAdd.push(image) : imagesToRemain.push(image);
    });
    setImages(imagesToRemain);
    setSelectedAmount(0);

    return props.onAddImages(imagesToAdd, imagesToRemain);
  }

  const imagesToRender = images.map((image, index) => 
    <div className="is_container__card"
         key={index}>
      <Card source={image.imageName}
            caption={image.imageCaption}
            isSelected={image.isSelected}
            onImageClick={() => imageClickHandler(image, index)}
            isCaptionVisible/>
    </div>
  );

  const actions = (
    <div className="is__actions">
      <Button onClick={addHandler}
              isDisabled={selectedAmount === 0}>
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
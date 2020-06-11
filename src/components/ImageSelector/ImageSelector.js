import React, { useState } from 'react';
import './ImageSelector.scss';
import Card from '../../ui-core/Card/Card';
import Button from '../../ui-core/Button/Button';

const ADD = 'Add';

const ImageSelector = (props) => {
  const [ images, setImages ] = useState(props.images);
  const [ selectedAmount, setSelectedAmount ] = useState(0);

  const imageClickHandler = (clickedImage) => {
    updateSelectedValue(clickedImage);
    updateSelectedAmount(clickedImage);
  }

  const updateSelectedValue = (imageToUpdate) => {
    // const newImages = [...images];
    // console.log('Image: ', imageToUpdate);
    // newImages.forEach((image) => {
    //   if(image.id === imageToUpdate.id) {
    //     image.isSelected = !image.isSelected;
    //   }
    // });
    // setImages(newImages);
    imageToUpdate.isSelected = !imageToUpdate.isSelected;
  }

  const updateSelectedAmount = (image) => {
    if(image.isSelected) {
      setSelectedAmount(selectedAmount+1);
    } else {
      setSelectedAmount(selectedAmount-1);
    }
  }

  const addHandler = () => {
    const imagesToAdd = [];
    const imagesToRemain = [];
    images.forEach((image) => {
      image.isSelected ? imagesToAdd.push(image) : imagesToRemain.push(image);
    });
    setImages(imagesToRemain);

    return props.onAddImages(imagesToAdd);
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

  return (
    <div className="image-selector">
      <div className="is__container">
        { imagesToRender }
      </div>

    <Button onClick={addHandler} isDisabled={selectedAmount === 0}>{ ADD }</Button>
    </div>
  );
};

export default ImageSelector;
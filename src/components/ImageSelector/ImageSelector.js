import React from 'react';
import './ImageSelector.scss';
import Card from '../../ui-core/Card/Card';
import Button from '../../ui-core/Button/Button';

const ADD = 'Add';
const imageSelector = (props) => {
  const imagesToRender = props.images.map((image, index) => 
    <div className="is_container__card"
         key={index}>
      <Card source={image.imageName}
            caption={image.imageCaption}
            isSelected={image.isSelected}
            onImageClick={() => props.onImageClick(image)}/>
    </div>
  );

  return (
    <div className="image-selector">
      <div className="is__container">
        { imagesToRender }
      </div>

    <Button onClick={props.onAddClick} isDisabled={props.isAddDisabled}>{ ADD }</Button>
    </div>
  );
};

export default imageSelector;
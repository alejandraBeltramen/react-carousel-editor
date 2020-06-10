import React, { useState } from 'react';
import './CarouselManager.scss';
import Card from '../../ui-core/Card/Card';
import Button from '../../ui-core/Button/Button';
import Carousel from '../../ui-core/Carousel/Carousel';
import ToggleButton from '../../ui-core/ToggleButton/ToggleButton';
import Dropdown from '../../ui-core/Dropdown/Dropdown';

const REMOVE = 'Remove';
const EDIT_MODE = 'Edit Mode';
const VIEW_MODE = 'View Mode';
const IMAGES_PER_TIME = [ 2, 3, 4, 5 ];

const CarouselManager = (props) => {
  const [ isEditMode, setIsEditMode ] = useState(false);
  const [ imagesPerTime, setImagesPerTime ] = useState(2);

  return (
    <div className="carousel-manager">
      <div className="cm-actions">
        <ToggleButton onToggleClick={() => setIsEditMode(!isEditMode)}>
          { isEditMode ? EDIT_MODE : VIEW_MODE }
        </ToggleButton>

        <Dropdown items={IMAGES_PER_TIME} onChange={(amount) => setImagesPerTime(amount)}/>
        <Button onClick={() => console.log('click')}>{ REMOVE }</Button>
      </div>

      <div className="cm-carousel">
        <Carousel images={props.images} itemsToDisplay={imagesPerTime}/>
      </div>
    </div>
  );
};

export default CarouselManager;
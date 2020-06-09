import React from 'react';
import './Carousel.scss';
import Card from '../Card/Card';

// props = images
const carousel = (props) => {
  let prevButtonClass = `uc-carousel__previous`;
  prevButtonClass = props.isPreviousEnabled ? prevButtonClass : `${prevButtonClass} button-disabled`;
  let nextButtonClass = `uc-carousel__next`;
  nextButtonClass = props.isNextEnabled ? nextButtonClass : `${nextButtonClass} button-disabled`;

  const flexWidth = `${100 / props.itemsToDisplay}%`;
  const imagesToRender = props.images.map((image, index) => 
    <div className="uc-carousel-container__card"
         style={{ flex: flexWidth }}
         key={index}>
      <Card source={image.imageName}
            caption={image.imageCaption}
            captionInside>
      </Card>
    </div>
  );

  return (
    <div className="uc-carousel">
      <button className={prevButtonClass}
              onClick={props.onPreviousClick}
              disabled={!props.isPreviousEnabled}>
      </button>
      <div className="uc-carousel__container">{ imagesToRender }</div>
      <button className={nextButtonClass}
              onClick={props.onNextClick}
              disabled={!props.isNextEnabled}>
      </button>
    </div>
  );
};

export default carousel;
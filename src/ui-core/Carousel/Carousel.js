import React, { useState } from 'react';
import './Carousel.scss';
import Card from '../Card/Card';

const Carousel = (props) => {
  const [ currentPage, setCurrentPage ] = useState(0);
  const imagesPerPage = [];
  const imageFlexWidth = `${100 / props.itemsToDisplay}%`;
  let prevButtonClass = `uc-carousel__previous`;
  let nextButtonClass = `uc-carousel__next`;

  props.images.forEach((image, index) => {
    if(index % props.itemsToDisplay == 0) {
      imagesPerPage.push([]);
    }
    imagesPerPage[Math.floor(index/props.itemsToDisplay)].push(image);
  });

  prevButtonClass = currentPage !== 0 ? prevButtonClass : `${prevButtonClass} button-disabled`;
  nextButtonClass = currentPage !== imagesPerPage.length-1 ? nextButtonClass : `${nextButtonClass} button-disabled`;

  const imagesToRender = imagesPerPage[currentPage].map((image, index) => 
    <div className="uc-carousel-container__card"
         style={{ flex: imageFlexWidth }}
         key={index}>
      <Card source={image.imageName}
            caption={image.imageCaption}
            isCaptionVisible={props.isCaptionVisible}
            isCaptionInside
            onImageClick={() => props.onImageClick(image)}>
      </Card>
    </div>
  );

  return (
    <div className="uc-carousel">
      <button className={prevButtonClass}
              onClick={() => setCurrentPage(currentPage-1)}
              disabled={currentPage === 0}>
      </button>
      <div className="uc-carousel__container">{ imagesToRender }</div>
      <button className={nextButtonClass}
              onClick={() => setCurrentPage(currentPage+1)}
              disabled={currentPage === imagesPerPage.length-1}>
      </button>
    </div>
  );
};

export default Carousel;
import React, { useState, useEffect } from 'react';
import './Carousel.scss';
import Card from '../Card/Card';

const FIRST_PAGE = 0;
const NO_IMAGES = [];

const Carousel = (props) => {
  const [ currentPage, setCurrentPage ] = useState(FIRST_PAGE);
  const [ prevItemsToDisplay, setPrevItemsToDisplay ] = useState(FIRST_PAGE);
  const imagesPerPage = NO_IMAGES;
  const imageFlexWidth = `${100 / props.itemsToDisplay}%`;
  let prevButtonClass = 'uc-carousel__previous';
  let nextButtonClass = 'uc-carousel__next';
  paginateImages();

  prevButtonClass = currentPage !== FIRST_PAGE ? prevButtonClass : `${prevButtonClass} button-disabled`;
  nextButtonClass = currentPage === imagesPerPage.length-1 ? `${nextButtonClass} button-disabled` : nextButtonClass;

  useEffect(() => {
    if(prevItemsToDisplay !== props.itemsToDisplay && currentPage !== FIRST_PAGE) {
      setCurrentPage(FIRST_PAGE);
    }
    setPrevItemsToDisplay(props.itemsToDisplay);
  }, [props.itemsToDisplay]);

  function paginateImages() {
    props.images.forEach((image, index) => {
      if(index % props.itemsToDisplay == 0) {
        imagesPerPage.push([]);
      }
      imagesPerPage[Math.floor(index/props.itemsToDisplay)].push(image);
    });

    if(props.images.length % props.itemsToDisplay !== 0 || props.images.length === 0) {
      const amountOfEmptyImages = props.itemsToDisplay - (props.images.length % props.itemsToDisplay);
      const index = props.images.length === 0 ? 0 : imagesPerPage.length-1;

      if(props.images.length === 0) {
        imagesPerPage.push([]);
      }

      for(let i = 0; i<amountOfEmptyImages; i++) {
        imagesPerPage[index].push({});
      }
    }
  }

  const index =  currentPage > imagesPerPage.length-1 ? FIRST_PAGE : currentPage;
  const imagesToRender = imagesPerPage[index].map((image, index) => 
    <div className="uc-carousel-container__card"
         style={{ flex: imageFlexWidth }}
         key={index}>
      <Card source={image.imageName}
            caption={image.imageCaption}
            isCaptionVisible={props.isCaptionVisible}
            isCaptionInside
            onImageClick={() => props.onImageClick(image)}
            isSelected={image.isSelected}>
      </Card>
    </div>
  );

  const dots = imagesPerPage.map((img, index) => <div key={index} className="uc-dot"></div>);

  return (
    <div className="uc-carousel">
      <button className={prevButtonClass}
              onClick={() => setCurrentPage(currentPage-1)}
              disabled={currentPage === FIRST_PAGE}>
      </button>
      <div className="uc-carousel__container">{ imagesToRender }</div>
      <button className={nextButtonClass}
              onClick={() => setCurrentPage(currentPage+1)}
              disabled={currentPage === imagesPerPage.length-1}>
      </button>
      <div className="uc-carousel__dots"> {dots} </div>
    </div>
  );
};

export default Carousel;
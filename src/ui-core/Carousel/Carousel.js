import React, { useState, useEffect } from 'react';
import './Carousel.scss';
import Card from '../Card/Card';

const FIRST_PAGE = 0;

const Carousel = (props) => {
  const [ currentPage, setCurrentPage ] = useState(FIRST_PAGE);
  const [ prevItemsToDisplay, setPrevItemsToDisplay ] = useState(FIRST_PAGE);
  const imagesPerPage = [];
  const imageFlexWidth = `${100 / props.itemsToDisplay}%`;
  let prevButtonClass = 'uc-carousel__previous';
  let nextButtonClass = 'uc-carousel__next';
  paginateImages();
  prevButtonClass = currentPage !== FIRST_PAGE ? prevButtonClass : `${prevButtonClass} button-disabled`;
  nextButtonClass = currentPage === imagesPerPage.length-1 ? `${nextButtonClass} button-disabled` : nextButtonClass;

  /**
   * Navigates to first page when a new amount of items to display is set
   */
  useEffect(() => {
    if(prevItemsToDisplay !== props.itemsToDisplay && currentPage !== FIRST_PAGE) {
      setCurrentPage(FIRST_PAGE);
    }
    setPrevItemsToDisplay(props.itemsToDisplay);
  }, [props.itemsToDisplay]);

  /**
   * Navigates to first page when images are removed or added
   */
  useEffect(() => {
    setCurrentPage(FIRST_PAGE);
  }, [props.images.length]);

  const pageIndex =  currentPage > imagesPerPage.length-1 ? FIRST_PAGE : currentPage;
  const imagesToRender = imagesPerPage[pageIndex].map((image, index) => {
    const imageIndex = currentPage * props.itemsToDisplay + index;
    return (
      <div className="uc-carousel-container__card"
          style={{ flex: imageFlexWidth }}
          key={index}>
        <Card source={image.imageName}
              caption={image.imageCaption}
              isCaptionVisible={props.isCaptionVisible}
              isCaptionInside
              onImageClick={() => props.onImageClick(image, imageIndex)}
              isSelected={image.isSelected}/>
      </div>
    );
  });

  const dots = imagesPerPage.map((img, index) => <div key={index} className="uc-dot"></div>);

  return (
    <div className="uc-carousel">
      <button className={prevButtonClass}
              onClick={() => setCurrentPage(currentPage-1)}
              disabled={currentPage === FIRST_PAGE}/>
      <div className="uc-carousel__container">{ imagesToRender }</div>
      <button className={nextButtonClass}
              onClick={() => setCurrentPage(currentPage+1)}
              disabled={currentPage === imagesPerPage.length-1}/>
      <div className="uc-carousel__dots">{ dots }</div>
    </div>
  );

  function paginateImages() {
    createPagesAndAssignElements();
    fillEmptySlots();   
  }

  function createPagesAndAssignElements() {
    props.images.forEach((image, index) => {
      const needNewPage = index % props.itemsToDisplay === 0;
      if(needNewPage) {
        imagesPerPage.push([]);
      }
      const indexWhereImageBelongs = Math.floor(index/props.itemsToDisplay);
      imagesPerPage[indexWhereImageBelongs].push(image);
    });
  }

  function fillEmptySlots() {
    const areEmptySlots = props.images.length % props.itemsToDisplay !== 0;
    if(areEmptySlots || props.images.length === 0) {
      const amountOfEmptySlots = props.itemsToDisplay - (props.images.length % props.itemsToDisplay);
      const pageIndexWithEmptySlots = props.images.length === 0 ? 0 : imagesPerPage.length-1;

      if(props.images.length === 0) {
        imagesPerPage.push([]);
      }

      for(let i = 0; i<amountOfEmptySlots; i++) {
        imagesPerPage[pageIndexWithEmptySlots].push({});
      }
    }
  }
};

export default Carousel;
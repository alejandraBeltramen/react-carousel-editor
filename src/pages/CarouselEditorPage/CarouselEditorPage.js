import React, { useState, useEffect } from 'react';
import './CarouselEditorPage.scss';
import CarouselManager from '../../components/CarouselManager/CarouselManager';
import ImageSelector from '../../components/ImageSelector/ImageSelector';
import ImageViewer from '../../components/ImageViewer/ImagerViewer';
import data from '../../data/carouselImages.json';
import { CAROUSEL_EDITOR } from '../../localization/english';
import { IMAGES_PATH } from '../../constants/CarouselEditorConstants';

const CarouselEditorPage = () => {
  const [ carouselImages, setCarouselImages ] = useState([]);
  const [ selectorImages, setSelectorImages ] = useState([]);
  const [ imageToView, setImageToView ] = useState({});

  /**
   * On creation, will get and parse the data to be
   * rendered
   */
  useEffect(() => {
    const result = data.carouselImages.map((rawImage) => ({
      ...rawImage,
      imageName: `${IMAGES_PATH}/${rawImage.imageName}`,
      isSelected: false
    }));
    setSelectorImages(result);
  }, []);

  /**
   * Sets the clicked image in the Image Viewer
   * @param {} clickedImage 
   */
  const carouselImageClickHandler = (clickedImage) => {
    setImageToView(clickedImage);
  };

  /**
   * 
   * @param {} removedImages 
   * @param {} remainingImages 
   */
  const removeImagesHandler = (removedImages, remainingImages) => {
    resetSelectedState(removedImages);
    setSelectorImages([...selectorImages, ...removedImages]);
    setCarouselImages(remainingImages);
    validateImageOnImageViewer(removedImages);
  };

  /**
   * Verifies if the current image in the Image Viewer is being
   * removed from the carousel, to remove it also from the
   * Image Viewer
   * @param {*} removedImages 
   */
  const validateImageOnImageViewer = (removedImages) => {
    const clearImageViewer = removedImages.find(image => image.imageName === imageToView.imageName);
    if(!!clearImageViewer) {
      setImageToView({});
    }
  }

  const addImagesHandler = (addedImages, remainingImages) => {
    resetSelectedState(addedImages);
    setCarouselImages([...carouselImages, ...addedImages]);
    setSelectorImages(remainingImages);
  }

  const resetSelectedState = (imagesToReset) => {
    imagesToReset.forEach((image) => image.isSelected = false);
  }

  return (
    <div className="carousel-editor-page">
      <h1>{ CAROUSEL_EDITOR }</h1>
      <ImageSelector images={selectorImages}
                     onAddImages={(addedImages, remainingImages) => addImagesHandler(addedImages, remainingImages)}/>
      <CarouselManager images={carouselImages}
                       onRemoveImages={(removedImages, remainingImages) => removeImagesHandler(removedImages, remainingImages)}
                       onImageClick={(image) => carouselImageClickHandler(image)}/>
      <ImageViewer image={imageToView}/>
    </div>
  );
};

export default CarouselEditorPage;
import React, { useState, useEffect } from 'react';
import './CarouselEditorPage.scss';
import CarouselManager from '../../components/CarouselManager/CarouselManager';
import ImageSelector from '../../components/ImageSelector/ImageSelector';
import ImageViewer from '../../components/ImageViewer/ImagerViewer';
import data from '../../data/carouselImages.json';

const IMAGES_PATH = './images';

const CarouselEditorPage = () => {
  const [ carouselImages, setCarouselImages ] = useState([]);
  const [ selectorImages, setSelectorImages ] = useState([]);
  const [ imageToView, setImageToView ] = useState({});

  useEffect(() => {
    const result = data.carouselImages.map((rawImage) => ({
      ...rawImage,
      imageName: `${IMAGES_PATH}/${rawImage.imageName}`,
      isSelected: false
    }));
    setSelectorImages(result);
  }, []);

  const carouselImageClickHandler = (clickedImage) => {
    console.log('image to view: ', clickedImage);
    setImageToView(clickedImage);
  };

  const removeImagesHandler = (removedImages, remainingImages) => {
    console.log('Removed images: ', removedImages);
    resetSelectedState(removedImages);
    setSelectorImages([...selectorImages, ...removedImages]);
    setCarouselImages(remainingImages);
  };

  const addImagesHandler = (addedImages, remainingImages) => {
    console.log('Added images: ', addedImages);
    resetSelectedState(addedImages);
    setCarouselImages([...carouselImages, ...addedImages]);
    setSelectorImages(remainingImages);
  }

  const resetSelectedState = (imagesToReset) => {
    imagesToReset.forEach((image) => image.isSelected = false);
  }

  return (
    <div className="carousel-editor-page">
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
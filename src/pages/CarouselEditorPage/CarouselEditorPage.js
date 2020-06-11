import React, { useState } from 'react';
import './CarouselEditorPage.scss';
import CarouselManager from '../../components/CarouselManager/CarouselManager';
import ImageSelector from '../../components/ImageSelector/ImageSelector';
import ImageViewer from '../../components/ImageViewer/ImagerViewer';

const CarouselEditorPage = (props) => {
  const [ carouselImages, setCarouselImages ] = useState([
    { id:1, imageName: "./images/letterBoardIc.jpg", imageCaption: "Letter Board", isSelected: false },
    { id:2, imageName: "./images/listen-hat.jpg", imageCaption: "Hat", isSelected: false },
    { id:3, imageName: "./images/listen-v02.jpg", imageCaption: "Girl", isSelected: false },
    { id:4, imageName: "./images/listeningBell.jpg", imageCaption: "Bell", isSelected: false },
    { id:5, imageName: "./images/listeningCap.jpg", imageCaption: "Cap", isSelected: false },
  ]);
  const [ imageToView, setImageToView ] = useState({});
  // const [ imageSelectorImages, setImageSelectorImages ] = useState([]);

  const carouselImageClickHandler = (clickedImage) => {
    console.log('image to view: ', clickedImage);
    setImageToView(clickedImage);
  };

  const removeImagesHandler = (removedImages) => {
    console.log('Removed images: ', removedImages);
    // resetear estado de seleccion
    // mandar a image selector
  };

  return (
    <div className="carousel-editor-page">
      <CarouselManager images={carouselImages}
                       onRemoveImages={(removedImages) => removeImagesHandler(removedImages)}
                       onImageClick={(image) => carouselImageClickHandler(image)}/>
      <ImageViewer image={imageToView}/>
      {/* <ImageSelector></ImageSelector> */}
    </div>
  );
};

export default CarouselEditorPage;
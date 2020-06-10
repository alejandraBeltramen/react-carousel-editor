import React from 'react';
import './App.scss';
import Carousel from './ui-core/Carousel/Carousel';
import ImageSelector from './components/ImageSelector/ImageSelector';
import ImageViewer from './components/ImageViewer/ImagerViewer';
import CarouselManager from './components/CarouselManager/CarouselManager';

function App() {
  const images = [
    { imageName: "./images/letterBoardIc.jpg", imageCaption: "Letter Board", isSelected: false },
    { imageName: "./images/listen-hat.jpg", imageCaption: "Hat", isSelected: true },
    { imageName: "./images/listen-v02.jpg", imageCaption: "Girl", isSelected: false },
    { imageName: "./images/listeningBell.jpg", imageCaption: "Bell", isSelected: true },
    { imageName: "./images/listeningCap.jpg", imageCaption: "Cap", isSelected: false },
  ];
  
  return (
    /** Carousel Manager */
    <CarouselManager images={images}
                     onRemoveImages={() => console.log('on remove button click')}
                     isRemoveDisabled={false}
                     onImageClick={(clickedImage) => console.log('Clicked Image: ', clickedImage) }/>

    /**Image Viewer */
    // <ImageViewer image={images[0]}/>

    /** Image Selector */
    // <div className="App">
    //   <ImageSelector images={images} onCardClick={onNextClick}/>
    // </div>


    /** Carousel */
    // <div className="App">
    //   <div className="container">
    //     <Carousel onPreviousClick={onPreviousClick}
    //               onNextClick={onNextClick}
    //               images={images}
    //               isPreviousEnabled={false}
    //               itemsToDisplay={4}
    //               isNextEnabled>
    //     </Carousel>
    //   </div>
    // </div>
  );
}

export default App;

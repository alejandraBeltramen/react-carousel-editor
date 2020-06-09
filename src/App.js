import React from 'react';
import './App.scss';
import Carousel from './ui-core/Carousel/Carousel';
import ImageSelector from './components/ImageSelector/ImageSelector';

function App() {
  const images = [
    { imageName: "./images/letterBoardIc.jpg", imageCaption: "Letter Board", isSelected: false },
    { imageName: "./images/listen-hat.jpg", imageCaption: "Hat", isSelected: true },
    { imageName: "./images/listen-v02.jpg", imageCaption: "Girl", isSelected: false },
    { imageName: "./images/listeningBell.jpg", imageCaption: "Bell", isSelected: true },
    { imageName: "./images/listeningCap.jpg", imageCaption: "Cap", isSelected: false },
    { imageName: "./images/listeningCup.jpg", imageCaption: "Cup", isSelected: false }
  ];

  const onPreviousClick = () => {
    console.log('click');
  };

  const onNextClick = () => {
    console.log('enabled');
  };

  return (
    <div className="App">
      <ImageSelector images={images} onCardClick={onNextClick}/>
    </div>


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

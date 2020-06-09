import React from 'react';
import './App.scss';
import Carousel from './ui-core/Carousel/Carousel';

function App() {
  const images = [
    { imageName: "./images/letterBoardIc.jpg", imageCaption: "Letter Board" },
    { imageName: "./images/listen-hat.jpg", imageCaption: "Hat" },
    { imageName: "./images/listen-v02.jpg", imageCaption: "Girl" },
    { imageName: "./images/listeningBell.jpg", imageCaption: "Bell" },
    { imageName: "./images/listeningCap.jpg", imageCaption: "Cap" },
    { imageName: "./images/listeningCup.jpg", imageCaption: "Cup" }
  ];

  const onPreviousClick = () => {
    console.log('click');
  };

  const onNextClick = () => {
    console.log('enabled');
  };

  return (
    <div className="App">
      <div className="container">
        <Carousel onPreviousClick={onPreviousClick}
                  onNextClick={onNextClick}
                  images={images}
                  isPreviousEnabled={false}
                  itemsToDisplay={4}
                  isNextEnabled>
        </Carousel>
      </div>
    </div>
  );
}

export default App;

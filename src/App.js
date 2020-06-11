import React from 'react';
import './App.scss';
import CarouselEditorPage from './pages/CarouselEditorPage/CarouselEditorPage';

function App() {
 
  return <CarouselEditorPage></CarouselEditorPage>;

    /** Carousel Manager */
    // <CarouselManager images={images}
    //                  onRemoveImages={() => console.log('on remove button click')}
    //                  isRemoveDisabled={false}
    //                  onImageClick={(clickedImage) => console.log('Clicked Image: ', clickedImage) }/>

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
  // );
}

export default App;

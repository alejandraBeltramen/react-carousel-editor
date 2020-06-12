import React from 'react';
import CarouselManager from './CarouselManager';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

describe('Components - Carousel Manager', () => {
  it('should be rendered without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CarouselManager images={[]} onImageClick={() => {}} onRemoveImages={() => {}}/>, div);
  });

  it('asd', () => {
    // Arrange
    const wrapper = shallow(<CarouselManager images={[]} onImageClick={() => {}} onRemoveImages={() => {}}/>);
    jest.spyOn(wrapper.instance(), 'imageClickHandler');

    // Act
    wrapper.instance().imageClickHandler();

    // Assert
    expect(CarouselManager.prototype.imageClickHandler).toHaveBeenCalledTimes(1);
  });

//   it('should create the html object to be rendered', () => {
//     // Arrange
//     jest.spyOn(CarouselManager.prototype, 'createDetails');

//     // Act
//     shallow(<CarouselManager details={'content'}/>);

//     // Assert
//     expect(CarouselManager.prototype.createDetails).toHaveBeenCalledTimes(1);
//   });
});
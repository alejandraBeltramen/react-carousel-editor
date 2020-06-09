import React from 'react';
import './Button.scss';

const button = (props) => (
  <button className='uc-button' onClick={ props.onClick }>
    { props.children }
  </button>
);

export default button;
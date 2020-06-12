import React from 'react';
import './Button.scss';

const button = (props) => {
  let buttonClases = 'uc-button';
  buttonClases = props.isDisabled ? `${buttonClases} uc-button__disabled` : buttonClases;

  return (
    <button className={buttonClases} onClick={props.onClick} disabled={props.isDisabled}>
      { props.children }
    </button>
  );
}

export default button;
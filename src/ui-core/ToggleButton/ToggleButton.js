import React from 'react';
import './ToggleButton.scss';

const toggleButton = (props) => (
  <div className="uc-toggle">
    <label className="uc-toggle-title">{ props.children }</label>
    <label className="uc-toggle-label">
      <input onClick={props.onToggleClick} type="checkbox"/>
      <span className="uc-toggle-label__slider"/>
    </label>
  </div>
);

export default toggleButton;
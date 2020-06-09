import React from 'react';
import './Toggle-button.scss';

const toggleButton = (props) => (
  <div className="uc-toggle">
    <label className="uc-toggle-title">{ props.children }</label>
    <label className="uc-toggle-label">
      <input onClick={props.onToggleClick} type="checkbox"/>
      <span className="uc-toggle-label__slider"></span>
    </label>
  </div>
);

export default toggleButton;
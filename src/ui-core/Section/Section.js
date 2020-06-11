import React from 'react';
import './Section.scss';

const section = (props) => (
  <div className="uc-section">
    <div className="uc-section__title">{ props.title }</div>
    <div className="uc-section__actions">{ props.actions }</div>
    <div className="uc-section__body">{ props.body }</div>
  </div>
);

export default section;
import React from 'react';
import './Card.scss';

const card = (props) => {
  let captionClasses = 'uc-card__caption';
  captionClasses = props.captionInside ? `${captionClasses} caption-inside` : captionClasses;

  let imageClasses = 'uc-card__image';
  imageClasses = props.isSelected ? `${imageClasses} image-selected` : imageClasses;

  return (
    <div className="uc-card">
      <img className={imageClasses} src={props.source} alt={props.caption}></img>
      <div className={captionClasses}>
        <label> { props.caption } </label>
      </div>
    </div>
  );
};

export default card;
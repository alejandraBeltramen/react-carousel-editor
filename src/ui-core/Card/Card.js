import React from 'react';
import './Card.scss';

const card = (props) => {
  let captionClasses = 'uc-card__caption';
  let imageClasses = 'uc-card__image';

  captionClasses = props.isCaptionInside ? `${captionClasses} caption-inside` : captionClasses;
  imageClasses = props.isSelected ? `${imageClasses} image-selected` : imageClasses;

  let caption = null;
  if(props.isCaptionVisible) {
    caption = (
      <div className={captionClasses}>
        <label> { props.caption } </label>
      </div>
    );
  }

  return (
    <div className="uc-card">
      <img className={imageClasses}
           src={props.source}
           alt={props.caption}
           onClick={props.onImageClick}></img>
      { caption }
    </div>
  );
};

export default card;
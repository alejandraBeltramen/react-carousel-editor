import React from 'react';
import './Card.scss';

const card = (props) => {
  let captionClasses = 'uc-card__caption';
  let imageClasses = 'uc-card__image';

  captionClasses = props.isCaptionInside ? `${captionClasses} caption-inside` : captionClasses;
  imageClasses = props.isSelected ? `${imageClasses} image-selected` : imageClasses;

  const caption = props.isCaptionVisible
    ? <div className={captionClasses}>
        <label> { props.caption } </label>
      </div>
    : null;

  const cardContent = props.source
    ? <img className={imageClasses}
           src={props.source}
           alt={props.caption}
           onClick={props.onImageClick}/>
    : <div className="uc-card__empty"></div>;

  return (
    <div className="uc-card">
      { cardContent }
      { caption }
    </div>
  );
};

export default card;
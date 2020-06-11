import React from 'react';
import './ImageViewer.scss';
import Card from '../../ui-core/Card/Card';
import Section from '../../ui-core/Section/Section';

const IMAGE_VIEWER = 'Image Viewer';
const NO_IMAGE_SELECTED = 'No image selected';

const imageViewer = (props) => {
  const body = (
    <div className="iv__content">
      { props.image.imageName ? 
          <Card source={props.image.imageName}
                caption={props.image.imageCaption}
                isCaptionVisible/> :
          NO_IMAGE_SELECTED
      }
    </div>
  );

  return (
    <div className="image-viewer">
      <Section title={IMAGE_VIEWER}
              body={body}/>
    </div>
  );
};

export default imageViewer;
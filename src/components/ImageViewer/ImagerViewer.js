import React from 'react';
import './ImageViewer.scss';
import Card from '../../ui-core/Card/Card';

const NO_IMAGE_SELECTED = 'No image selected';

const imageViewer = (props) => (
  <div className="image-viewer">
    <div className="iv__title">Image Viewer</div>

    <div className="iv__content">
      { props.image.imageName ? 
          <Card source={props.image.imageName}
                caption={props.image.imageCaption}
                isCaptionVisible/> :
          NO_IMAGE_SELECTED
      }
    </div>
    
  </div>
);

export default imageViewer;
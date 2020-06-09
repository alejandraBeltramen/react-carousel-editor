import React from 'react';
import './ImageViewer.scss';
import Card from '../../ui-core/Card/Card';

const imageViewer = (props) => (
  <div className="image-viewer">
    <Card source={props.image.imageName}
          caption={props.image.imageCaption}/>
  </div>
);

export default imageViewer;
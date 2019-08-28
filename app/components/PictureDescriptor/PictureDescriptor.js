import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { POSITION } from './constants';
import './style.scss';

function PictureDescriptor(props) {
  const {
    image,
    imageAlt,
    imageLabel,
    imagePosition,
    body,
    imgContainerStyle,
    imgContainerClassName,
  } = props;

  const imageContainer = (
    <div className={`image-container ${imgContainerClassName ? imgContainerClassName : ''}`} style={imgContainerStyle}>
      <img src={image} alt={imageAlt} className="image-prop" onMouseDown={() => {}}/>
      {
        imageLabel ? <div className="image-label">{imageLabel}</div> : null
      }
    </div>
  );

  const getFirst = () => {
    if (imagePosition === POSITION.RIGHT) {
      return body;
    }
    if (imagePosition === POSITION.LEFT) {
      return imageContainer;
    }
    if (imagePosition === POSITION.TOP) {
      throw Error('ERROR: TOP position not yet implemented!');
    }
    if (imagePosition === POSITION.BOTTOM) {
      throw Error('ERROR: BOTTOM Position not yet implemented!');
    }

    return null;
  };

  const getSecond = () => {
    if (imagePosition === POSITION.RIGHT) {
      return imageContainer;
    }
    if (imagePosition === POSITION.LEFT) {
      return body;
    }
    if (imagePosition === POSITION.TOP) {
      throw Error('ERROR: TOP position not yet implemented!');
    }
    if (imagePosition === POSITION.BOTTOM) {
      throw Error('ERROR: BOTTOM Position not yet implemented!');
    }

    return null;
  };

  const getClassNames = () => {
    return clsx([
      'picture-descriptor-wrapper',
      {
        'flex-wrap': imagePosition === POSITION.LEFT,
        'flex-wrap-reverse': imagePosition === POSITION.RIGHT,
      }
    ]);
  };

  return (
    <div className={getClassNames()}>
      {
        getFirst()
      }
      {
        getSecond()
      }
    </div>
  );
}

PictureDescriptor.propTypes = {
  imagePosition: PropTypes.oneOf(Object.values(POSITION)),
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  imageLabel: PropTypes.string,
  body: PropTypes.element,
  imgContainerStyle: PropTypes.object,
  imgContainerClassName: PropTypes.string,
};

export default PictureDescriptor;

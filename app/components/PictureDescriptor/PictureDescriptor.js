import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

function PictureDescriptor(props) {
  const {
    image,
    imageAlt,
    imagePosition,
    body
  } = props;

  return (
    <div style={{ display: 'inline-flex', alignContent: 'space-around' }}>
      <div style={{ maxWidth: '30%' }}>
        <img src={image} alt={imageAlt} />
      </div>
      <Typography variant="body1" component="div" style={{ maxWidth: '30%' }}>
        {
          body
        }
      </Typography>
    </div>
  );
}

PictureDescriptor.propTypes = {
  imagePosition: PropTypes.oneOf(['top', 'left', 'bottom', 'right']),
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  body: PropTypes.element,
};

export default PictureDescriptor;

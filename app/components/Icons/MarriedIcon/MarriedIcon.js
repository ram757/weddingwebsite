import React from 'react';
import PropTypes from 'prop-types';
import Married from './images/married_scaled.jpg';

/**
 * Just wrapping image in an svg because I'm lazy.
 */
const MarriedIcon = ({ styleProps }) => (
  <svg width="30pt" height="30pt" viewBox="0 0 30 30">
   <image href={Married} style={styleProps}/>
  </svg>
);

MarriedIcon.propTypes = {
  styleProps: PropTypes.object
};

export default MarriedIcon;

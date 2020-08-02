import React from 'react';
import PropTypes from 'prop-types';
import { isMobileDevice } from '../../utils/helpers';
import './style.scss';

function MobileDisclaimer(props) {
  const { text } = props;

  return isMobileDevice() ? (
    <div className="mobile-disclaimer">{text}</div>
  ) : null;
}

MobileDisclaimer.propTypes = {
  text: PropTypes.string,
};

export default MobileDisclaimer;

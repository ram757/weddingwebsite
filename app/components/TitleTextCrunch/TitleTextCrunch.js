import React from 'react';
import PropTypes from 'prop-types';
import { generateHash } from '../../utils/helpers';
import './style.scss';

function TitleTextCrunch(props) {
  const { text } = props;

  const crunchLetters = (crunchText) => {
    if (!crunchText) {
      return null;
    }
    return [...crunchText].map((letter) => {
      return <span key={generateHash(10)}>{letter}</span>;
    });
  };

  return <div className="title-text-crunch">{crunchLetters(text)}</div>;
}

TitleTextCrunch.propTypes = {
  text: PropTypes.string,
};

export default TitleTextCrunch;

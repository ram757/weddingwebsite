import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './images/hedgehog_banner.jpg';
import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header">
        <img src={Banner} alt="hedgehog-banner" />
        <div className="nav-bar">
          <Link className="router-link" to="/">
            Home
          </Link>
          <Link className="router-link" to="/bogus">
            To Do
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;

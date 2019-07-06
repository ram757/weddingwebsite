/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import './style.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <article>
        <Helmet>
          <title>6/20/20</title>
          <meta name="description" content="Ryan ❤️ Brigitte" />
        </Helmet>
        <div className="home-page">
          <section className="centered">
            <h2>Ryan and Brigitte</h2>
            <p>
              ARE GETTING MARRIED
            </p>
          </section>
        </div>
      </article>
    );
  }
}

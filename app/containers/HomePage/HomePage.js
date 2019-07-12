/*
 * HomePage
 */

import React from 'react';
import './style.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <article>
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

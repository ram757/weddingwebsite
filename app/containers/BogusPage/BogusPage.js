/*
 * BogusPage
 *
 * List of bogus stuff
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import './style.scss';

export default class BogusPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="bogus-page">
        <Helmet>
          <title>To Do Page</title>
          <meta
            name="description"
            content="Bogus page"
          />
        </Helmet>
        <h1>Stuff to do</h1>
        <ul>
          <li>
            <p className="title">Real content</p>
            <p>
              Fill our website with real content :)
            </p>
          </li>
          <li>
            <p className="title">Send save-the-dates</p>
            <p>
              They&apos;ll be coming...
            </p>
          </li>
          <li>
            <p className="title">Keep doing wedding stuff</p>
            <p>
              Why are weddings so much damn work?
            </p>
          </li>
        </ul>
        <i>and much more...</i>
      </div>
    );
  }
}

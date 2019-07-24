/*
 * FAQPage
 */
import React from 'react';
import './style.scss';

// const TestComponent = ({ text }) => <div>{text}</div>;

export default class FAQPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="faq-page">
        <h1>Wedding FAQ</h1>
        <ul>
          <li>
            <p className="title">Can Brandon McDonald wear basketball shorts?</p>
            <p>
              Fuck no.
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

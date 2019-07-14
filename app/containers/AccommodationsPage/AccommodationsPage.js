/*
 * AccommodationsPage
 */
import React from 'react';
import './style.scss';

export default class AccommodationsPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="accommodations-page">
      </div>
    );
  }
}

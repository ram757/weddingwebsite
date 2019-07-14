/*
 * AccommodationsPage
 *
 * List of bogus stuff
 */
import React from 'react';
// import GoogleMap from 'google-map-react';
// import { G_MAPS_API_KEY } from '../../hidden';
import './style.scss';

const TestComponent = ({ text }) => <div>{text}</div>;

export default class AccommodationsPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  static defaultProps = {
    center: {
      lng: -73.511592,
      lat: 41.045260
    },
    zoom: 11
  };

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="accommodations-page">
        <div style={{ height: '50vh', width: '50%' }}>
          {/*<GoogleMap*/}
            {/*bootstrapURLKeys={{ key: G_MAPS_API_KEY }}*/}
            {/*defaultCenter={AccommodationsPage.defaultProps.center}*/}
            {/*defaultZoom={AccommodationsPage.defaultProps.zoom}*/}
          {/*>*/}
            {/*<TestComponent*/}
              {/*lat={41.045260}*/}
              {/*lng={-73.511592}*/}
              {/*text="BUTTS"*/}
            {/*/>*/}
          {/*</GoogleMap>*/}
        </div>
      </div>
    );
  }
}

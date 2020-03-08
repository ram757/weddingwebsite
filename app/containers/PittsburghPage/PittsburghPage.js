/**
 * PittsburghPage
 */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import GoogleMap from 'google-map-react';
import MapMarker from '../../components/MapMarker';
import TitleTextCrunch from '../../components/TitleTextCrunch';
import MobileDisclaimer from '../../components/MobileDisclaimer'
import { generateHash, isMobileDevice } from '../../utils/helpers';
import { G_MAPS_API_KEY } from '../../hidden/hidden';
import { PGH_LOCATIONS } from '../../hidden/pittsburghPageContent';
import PittsburghBanner from './images/pittsburgh_banner.jpg';
import './style.scss';

export default class PittsburghPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static defaultMapProps = {
    center: {
      lng: -79.947344,
      lat: 40.439220
    },
    zoom: 13.5
  };

  render() {
    return (
      <div className="pittsburgh-page">
        <TitleTextCrunch text="PITTSBURGH" />
        <Typography variant="h1">
          Go Explore!
        </Typography>
        <Typography variant="h2">
          Get the most out of your Pittsburgh trip by hearing what Cyndaquil Says!<br /><br />
        </Typography>
        <MobileDisclaimer
          text="On mobile devices, please click on the map markers to show hover-over content.  If content does not display, Ryan probably did not test with your specific mobile browser."
        />
        <div style={{ height: isMobileDevice() ? '70vh' : '125vh', paddingLeft: '5%', paddingRight: '5%' }}>
          <GoogleMap
            bootstrapURLKeys={{ key: G_MAPS_API_KEY }}
            defaultCenter={PittsburghPage.defaultMapProps.center}
            defaultZoom={PittsburghPage.defaultMapProps.zoom}
          >
            {
              PGH_LOCATIONS.map((pghItem) => (<MapMarker key={generateHash(10)} {...pghItem} />))
            }
          </GoogleMap>
        </div>
        <div className="stretch-container-16">
          <img src={PittsburghBanner} alt="CMU & Pitt banner" className="footer-image" />
        </div>
      </div>
    );
  }
}

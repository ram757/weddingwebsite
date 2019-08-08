/*
 * AccommodationsPage
 */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import GoogleMap from 'google-map-react';
import MapMarker from '../../components/MapMarker/MapMarker';
import {generateHash} from '../HomePage/constants';
import {G_MAPS_API_KEY, PGH_LOCATIONS} from '../../hidden/hidden';
import PittsburghBanner from './images/pittsburgh_banner.jpg';
import './style.scss';

export default function PittsburghPage() {
  const defaultProps = {
    center: {
      lng: -79.947344,
      lat: 40.439220
    },
    zoom: 13.5
  };

  return (
    <div className="pittsburgh-page">
      <div className="text-title-crunch">
        <span>P</span>
        <span>I</span>
        <span>T</span>
        <span>T</span>
        <span>S</span>
        <span>B</span>
        <span>U</span>
        <span>R</span>
        <span>G</span>
        <span>H</span>
      </div>
      <Typography variant="h1">
        Go Explore!
      </Typography>
      <Typography variant="h2">
        Get the most out of your Pittsburgh trip by hearing what Cyndaquil Says!<br /><br />
      </Typography>
      <div style={{ height: '150vh', paddingLeft: '5%', paddingRight: '5%' }}>
        <GoogleMap
          bootstrapURLKeys={{ key: G_MAPS_API_KEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
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

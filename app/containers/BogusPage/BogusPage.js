/*
 * BogusPage
 *
 * List of bogus stuff
 */
import React from 'react';
import ToolTip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import Place from '@material-ui/icons/Place';
import Star from '@material-ui/icons/Star';
// import GoogleMap from 'google-map-react';
import MapMarker from '../../components/MapMarker/MapMarker';
import { generateHash } from '../../utils/helpers';
import { G_MAPS_API_KEY, PGH_LOCATIONS } from '../../hidden/hidden';
import SomebodySays from '../../components/SomebodySays';
import MapMarkerSays from '../../components/MapMarkerSays/MapMarkerSays';
import MarriedIcon from '../../components/Icons/MarriedIcon';
import { AVATAR } from '../../components/SomebodySays/constants';
import './style.scss';
// import AddToCalendar from '../../components/AddToCalendar';

const defaultProps = {
  center: {
    lng: -79.947344,
    lat: 40.43922,
  },
  zoom: 15,
};

const BogusPage = () => {
  return (
    <div className="bogus-page">
      <h1>Stuff to do</h1>
      <ul>
        <li>
          <p className="title">Real content</p>
          <p>Fill our website with real content :)</p>
        </li>
        <li>
          <p className="title">Send save-the-dates</p>
          <p>They&apos;ll be coming...</p>
        </li>
        <li>
          <p className="title">Keep doing wedding stuff</p>
          <p>Why are weddings so much damn work?</p>
        </li>
        <li>
          <p className="title">
            <i>and much more...</i>
          </p>
        </li>
        <li>
          <SomebodySays
            avatar="Cyndaquil"
            switchTo="Edgar"
            headerText="Edgar sucks!"
            headerTextAlt="Cyndaquil is soo coooool!"
          />
        </li>
        <li>
          <SomebodySays
            avatar="Edgar"
            headerText="This one just expands/collapses..."
            collapsedComponent={<div>cats</div>}
          />
        </li>
        <li>
          <ToolTip
            interactive
            title={
              <React.Fragment>
                <SomebodySays
                  avatar="Edgar"
                  switchTo="Cyndaquil"
                  headerText="Get dat tooltip"
                  headerTextAlt="cats cats cats"
                />
              </React.Fragment>
            }
          >
            <div style={{ width: '300px', margin: 0 }}>
              <SomebodySays
                avatar="Edgar"
                switchTo="Cyndaquil"
                headerText="Please hover over me..."
                headerTextAlt="I like cats"
              />
            </div>
          </ToolTip>
        </li>
        <li>
          <div style={{ height: '100vh', width: '80%', textAlign: 'center' }}>
            G-maps dawg
            <div style={{ width: '250px', margin: '0' }}>
              <SomebodySays
                avatar="Cyndaquil"
                headerText={
                  <div>
                    IT&apos;S GONNA BE BUMPIN!!!!
                    <br />
                    This is where the wedding is at!!!
                  </div>
                }
                collapsedComponent={
                  <div>
                    <Button
                      style={{
                        textTransform: 'unset',
                        textDecoration: 'underline',
                      }}
                      target="_blank"
                      href={
                        'https://maps.google.com/?q=1 Schenley Drive, Pittsburgh, PA 15213'
                      }
                      rel="noopener noreferer"
                    >
                      Phipps Conservatory and Botanical Gardens
                    </Button>
                  </div>
                }
              />
            </div>
            <br />
            <MapMarkerSays
              whoSays={AVATAR.CYNDAQUIL}
              headerText={
                <div>
                  IT&apos;S GONNA BE BUMPIN!!!!
                  <br />
                  This is where the wedding is at!!!
                </div>
              }
              markerLocation="1 Schenley Drive, Pittsburgh, PA 15213"
              buttonContent="Phipps Conservatory and Botanical Gardens"
            />
            <Place
              style={{ color: 'red', transform: 'translate(-50%, -50%' }}
            />
            <Star style={{ color: 'red', transform: 'translate(-50%, -50%' }} />
            <MarriedIcon />
            {/*<GoogleMap*/}
            {/*bootstrapURLKeys={{ key: G_MAPS_API_KEY }}*/}
            {/*defaultCenter={BogusPage.defaultProps.center}*/}
            {/*defaultZoom={BogusPage.defaultProps.zoom}*/}
            {/*>*/}
            {/*{*/}
            {/*PGH_LOCATIONS.map((pghItem) => (<MapMarker key={generateHash(10)} {...pghItem} />))*/}
            {/*}*/}
            {/*</GoogleMap>*/}
            <br />
            {/* <AddToCalendar /> */}
            <br />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default BogusPage;

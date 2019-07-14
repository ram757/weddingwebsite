/*
 * BogusPage
 *
 * List of bogus stuff
 */
import React from 'react';
import SomebodySays from '../../components/SomebodySays';
// import GoogleMap from 'google-map-react';
// import { G_MAPS_API_KEY } from '../../hidden';
import './style.scss';

// const TestComponent = ({ text }) => <div>{text}</div>;

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
          <li>
            <p className="title"><i>and much more...</i></p>
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
            <SomebodySays
              avatar="Edgar"
              headerText="This one just expands/collapses..."
            />
          </li>
          <li>
            <div style={{ height: '50vh', width: '50%' }}>
              G-maps dawg
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
          </li>
        </ul>
      </div>
    );
  }
}

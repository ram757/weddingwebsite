/*
 * AccommodationsPage
 */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import AddressCard from '../../components/AddressCard';
import OliveSleeping from './images/olive_sleeping.jpg';
import './style.scss';

export default class AccommodationsPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  renderMainAccommodationInfo() {
    return (
      <div>
        <div>
          530 William Penn Pl
          <br />
          Pittsburgh, PA 15219
        </div>
        <br />
        <div className="sub-text">
          Please reference the Quirk/McDonald Wedding when reserving your room for a special rate.
          Reserve your room by [TBD]. Transportation will be provided to and from the wedding for
          guests staying in this hotel.
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="accommodations-page">
        <Typography variant="h1">
          Rooms have been reserved at
        </Typography>
        <hr className="header-hr-bar" />
        <AddressCard
          className="center-card"
          titleText="The Omni William Penn Hotel"
          bodyText={this.renderMainAccommodationInfo()}
          buttonText="More Info"
          buttonLink="https://www.omnihotels.com/hotels/pittsburgh-william-penn"
        />
        <br />
        <Typography variant="h1">
          Other nearby hotels
        </Typography>
        <hr className="header-hr-bar" />
        <AddressCard
          className="center-card"
          titleText="Hilton Garden Inn Pittsburgh University Place"
          bodyText={(<div>3454 Forbes Ave,<br />Pittsburgh, PA 15213<br />(412) 683-2040</div>)}
          buttonText="More Info"
          buttonLink="https://hiltongardeninn3.hilton.com/en/hotels/pennsylvania/hilton-garden-inn-pittsburgh-university-place-PITUCGI/index.html"
        />
        <br />
        <AddressCard
          className="center-card"
          titleText="Residence Inn by Marriott Pittsburgh Oakland/University Place"
          bodyText={(<div>3341 Forbes Ave,<br />Pittsburgh, PA 15213<br />(412) 621-5600</div>)}
          buttonText="More Info"
          buttonLink="https://www.marriott.com/hotels/travel/pitrd-residence-inn-pittsburgh-oakland-university-place/"
        />
        <br />
        <AddressCard
          className="center-card"
          titleText="Hotel Indigo Pittsburgh - Technology Center"
          bodyText={(<div>329 Technology Dr,<br />Pittsburgh, PA 15219<br />(412) 621-0880</div>)}
          buttonText="More Info"
          buttonLink="http://indigo-technology-center.getpennsylvaniahotels.com/en/"
        />
        <br />
        <AddressCard
          className="center-card"
          titleText="Kimpton Hotel Monaco Pittsburgh"
          bodyText={(<div>620 William Penn Pl,<br />Pittsburgh, PA 15219<br />(412) 471-1170</div>)}
          buttonText="More Info"
          buttonLink="https://www.monaco-pittsburgh.com/"
        />
        <br />
        <br />
        <div className="stretch-container-16">
          <img src={OliveSleeping} alt="Olive sleeping" />
        </div>
      </div>
    );
  }
}

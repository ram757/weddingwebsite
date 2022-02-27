/*
 * AccommodationsPage
 */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import GoogleMap from 'google-map-react';
import MapMarker from '../../components/MapMarker';
import MobileDisclaimer from '../../components/MobileDisclaimer';
import TitleTextCrunch from '../../components/TitleTextCrunch';
import { generateHash } from '../../utils/helpers';
import { G_MAPS_API_KEY } from '../../hidden/hidden';
import AddressCard from '../../components/AddressCard';
import { HOTEL_LOCATIONS } from './constants';
import OliveSleeping from './images/olive_sleeping.jpg';
import './style.scss';

const defaultMapProps = {
  center: {
    lat: 40.43901,
    lng: -79.979215,
  },
  zoom: 13,
};

const renderMainAccommodationInfo = () => {
  return (
    <div className="address-body-text">
      <div>
        530 William Penn Pl,
        <br />
        Pittsburgh, PA 15219
        <br />
        (412) 281-7100
      </div>
      <br />
      <div className="sub-text">
        Please reference the Quirk/McDonald Wedding when reserving your room for
        a special rate (when calling). Reserve your room by May 10th, 2022.
        Transportation will be provided to and from the wedding for guests
        staying in this hotel. <br />
        <br /> Please click 'Book Now' to make a reservation.
      </div>
    </div>
  );
};

const renderSecondAccommodationInfo = () => {
  return (
    <div className="address-body-text">
      <div>
        3454 Forbes Ave,
        <br />
        Pittsburgh, PA 15213
        <br />
        (412) 683-2040
      </div>
      <br />
      <div className="sub-text">
        Please reference the Quirk/McDonald Wedding when reserving your room for
        a special rate (when calling). Reserve your room by May 10th, 2022.
        Transportation will be provided to and from the wedding for guests
        staying in this hotel. <br />
        <br /> Please click 'Book Now' to make a reservation.
      </div>
    </div>
  );
};

const renderHotelPins = () => {
  return HOTEL_LOCATIONS.map((hotelItem) => (
    <MapMarker key={generateHash(10)} {...hotelItem} />
  ));
};

const AccommodationsPage = () => {
  return (
    <div className="accommodations-page">
      <TitleTextCrunch text="ACCOMMODATIONS" />
      <Typography variant="h1">Rooms have been reserved at</Typography>
      <hr className="header-hr-bar" />
      <AddressCard
        className="center-card"
        titleText="The Omni William Penn Hotel"
        bodyText={renderMainAccommodationInfo()}
        buttonText="Book Now"
        buttonLink="https://www.omnihotels.com/hotels/pittsburgh-william-penn/weddings/quirk-mcdonald-wedding-06092022"
      />
      <br />
      <AddressCard
        className="center-card"
        titleText="Hilton Garden Inn Pittsburgh University Place"
        bodyText={renderSecondAccommodationInfo()}
        buttonText="Book Now"
        buttonLink="https://www.hilton.com/en/book/reservation/deeplink/?ctyhocn=PITUCGI&groupCode=QMDW&arrivaldate=2022-06-10&departuredate=2022-06-13&cid=OM,WW,HILTONLINK,EN,DirectLink&fromId=HILTONLINKDIRECT"
      />
      <br />
      <Typography variant="h1">Other nearby hotels</Typography>
      <hr className="header-hr-bar" />
      <AddressCard
        className="center-card"
        titleText="Residence Inn by Marriott Pittsburgh Oakland/University Place"
        bodyText={
          <div className="address-body-text">
            3341 Forbes Ave,
            <br />
            Pittsburgh, PA 15213
            <br />
            (412) 621-5600
          </div>
        }
        buttonText="More Info"
        buttonLink="https://www.marriott.com/hotels/travel/pitrd-residence-inn-pittsburgh-oakland-university-place/"
      />
      <br />
      <AddressCard
        className="center-card"
        titleText="Wyndham Pittsburgh University Center"
        bodyText={
          <div className="address-body-text">
            100 Lytton Ave,
            <br />
            Pittsburgh, PA 15213
            <br />
            (412) 682-6200
          </div>
        }
        buttonText="More Info"
        buttonLink="http://www.wyndhampittsburghuniversitycenter.com/"
      />
      <br />
      <AddressCard
        className="center-card"
        titleText="Hotel Indigo Pittsburgh - Technology Center"
        bodyText={
          <div className="address-body-text">
            329 Technology Dr,
            <br />
            Pittsburgh, PA 15219
            <br />
            (412) 621-0880
            <br />
            <br />
            Pet friendly option :)
          </div>
        }
        buttonText="More Info"
        buttonLink="http://indigo-technology-center.getpennsylvaniahotels.com/en/"
      />
      <br />
      <MobileDisclaimer text="On mobile devices, please click the map markers to show hover-over content.  If content does not display, Ryan probably did not test with your specific mobile browser." />
      <div style={{ height: '60vh', maxWidth: '600px', margin: 'auto' }}>
        <GoogleMap
          bootstrapURLKeys={{ key: G_MAPS_API_KEY }}
          defaultCenter={defaultMapProps.center}
          defaultZoom={defaultMapProps.zoom}
        >
          {renderHotelPins()}
        </GoogleMap>
      </div>
      <br />
      <div className="center-card">
        For more hotel options and/or price comparisons please consult
        <br />
        <a
          style={{ fontSize: '48px' }}
          href="https://www.google.com/travel/hotels/Pennsylvania?g2lb=4208993%2C4253230%2C4253565%2C4254308%2C4258168%2C4260007%2C4270442%2C4274032%2C4276661%2C4282187%2C4282357%2C4285990%2C4287183%2C4287732%2C4288707%2C4291318%2C4292004%2C4292345%2C4292608%2C4296056%2C4265427%2C4270859%2C4272931%2C4291516&hl=en&gl=us&un=1&q=hotels%20in%20oakland%20pa&rp=OAFAAEgC&ictx=1&ved=0CAAQ5JsGahcKEwjwvom6_ZD1AhUAAAAAHQAAAAAQAg&tcfs=EjAKCC9tLzA2OHAyEgpQaXR0c2J1cmdoGhgKCjIwMjAtMDYtMTkSCjIwMjAtMDYtMjEiGAoKMjAyMC0wNi0xORIKMjAyMC0wNi0yMVIA&ap=KigKEgkYzteo0jFEQBE8aOMYVgBUwBISCevNP2m3PkRAETxo42iU-VPAMAFaqQMKBQivARAAIgNVU0QqFgoHCOYPEAEYBBIHCOYPEAEYBRgBKACwAQBYAWgBcgQIAhgAigEoChIJGM7XqNIxREARPGjjGFYAVMASEgnrzT9ptz5EQBE8aONolPlTwJoBDBIKUGl0dHNidXJnaKIBFgoIL20vMDY4cDISClBpdHRzYnVyZ2iqAQoKAgghEgIICBgBqgEOCgIIFBICCHASAggbGAGqAQcKAwiwAhgAqgEfCgIIHBIDCJcBEgIIURICCFgSAghzEgIIRxICCE0YAaoBCgoCCCUSAgh4GAGqARcKAggREgMImgISAgg4EgIIVxICCH8YAaoBLAoCCC4SAwiAARICCDsSAghWEgIIOhICCD0SAwiDARICCEsSAghTEgIIJxgBqgEHCgMItwIYAKoBDwoCCDUSAghBEgMIlgEYAZIBAiAB6gENCAASCS9tLzAzNjcza-oBDQgAEgkvbS8wN3IxcmjqAQ0IABIJL20vMDhnbWNn6gENCAASCS9tLzA4Z3F0duoBEQgAEg0vZy8xMWJjNV85cnNw6gENCAASCS9tLzA4ZDM2bA&utm_campaign=sharing&utm_medium=link&utm_source=htls&ts=CAESCgoCCAMKAggDEAAaVgo4Egw6ClBpdHRzYnVyZ2gaKAoSCRjO16jSMURAETxo4xhWAFTAEhIJ680_abc-REARPGjjaJT5U8ASGhIUCgcI5g8QBhgLEgcI5g8QBhgNGAIyAggBKgsKBygBOgNVU0QaAA"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Googles
        </a>
      </div>
      <div className="stretch-container-16">
        <img
          src={OliveSleeping}
          alt="Olive sleeping"
          className="footer-image"
        />
      </div>
    </div>
  );
};

export default AccommodationsPage;

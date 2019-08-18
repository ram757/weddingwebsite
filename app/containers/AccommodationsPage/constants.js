import React from 'react';
import Star from '@material-ui/icons/Star'
import MapMarkerSays from '../../components/MapMarkerSays';
import { AVATAR } from '../../components/SomebodySays/constants';

export const HOTEL_LOCATIONS = [
  {
    lat: 40.439220,
    lng: -79.947344,
    hoverComponent: (
      <MapMarkerSays
        whoSays={AVATAR.EDGAR}
        headerText={(
          <div>
            This is where the wedding is at!!!
          </div>
        )}
        markerLocation="1 Schenley Drive, Pittsburgh, PA 15213"
        buttonContent="Phipps Conservatory and Botanical Gardens"
      />
    ),
    markerImage: (<Star style={{ color: 'red', transform: 'translate(-50%, -50%', height: '30px', width: '30px' }} />)
  },
  {
    lat: 40.440593,
    lng: -79.996588,
    hoverComponent: (
      <MapMarkerSays
        whoSays={AVATAR.EDGAR}
        headerText={(
          <div>
            The Omni William Penn Hotel!  A hotel block has been reserved here.
            <a href="https://www.omnihotels.com/hotels/pittsburgh-william-penn/weddings/quirk-and-mcdonald-wedding-06192020" target="_blank" rel="noopener noreferrer"> Click here to book a room!</a> 
          </div>
        )}
        markerLocation="530 William Penn Pl, Pittsburgh, PA 15219"
        buttonContent="Open in Google Maps"
      />
    )
  },
  {
    lat: 40.439439,
    lng: -79.959401,
    hoverComponent: (
      <MapMarkerSays
        whoSays={AVATAR.EDGAR}
        headerText={(
          <div>
            Hilton Garden Inn Pittsburgh University Place!  A second hotel block will soon be reserved here.
          </div>
        )}
        markerLocation="3454 Forbes Ave, Pittsburgh, PA 15213"
        buttonContent="Open in Google Maps"
      />
    )
  },
  {
    lat: 40.438142,
    lng: -79.962154,
    hoverComponent: (
      <MapMarkerSays
        whoSays={AVATAR.EDGAR}
        headerText={(
          <div>
            Residence Inn by Marriott Pittsburgh Oakland/University Place
          </div>
        )}
        markerLocation="3341 Forbes Ave, Pittsburgh, PA 15213"
        buttonContent="Open in Google Maps"
      />
    )
  },
  {
    lat: 40.446134,
    lng: -79.954440,
    hoverComponent: (
      <MapMarkerSays
        whoSays={AVATAR.EDGAR}
        headerText={(
          <div>
            Wyndham Pittsburgh University Center
          </div>
        )}
        markerLocation="100 Lytton Ave, Pittsburgh, PA 15213"
        buttonContent="Open in Google Maps"
      />
    )
  },
  {
    lat: 40.431208,
    lng: -79.959956,
    hoverComponent: (
      <MapMarkerSays
        whoSays={AVATAR.EDGAR}
        headerText={(
          <div>
            Hotel Indigo Pittsburgh - Technology Center
          </div>
        )}
        markerLocation="329 Technology Dr, Pittsburgh, PA 15219"
        buttonContent="Open in Google Maps"
      />
    )
  },
  {
    lat: 40.441362,
    lng: -79.996222,
    hoverComponent: (
      <MapMarkerSays
        whoSays={AVATAR.EDGAR}
        headerText={(
          <div>
            Kimpton Hotel Monaco Pittsburgh
          </div>
        )}
        markerLocation="620 William Penn Pl, Pittsburgh, PA 15219"
        buttonContent="Open in Google Maps"
      />
    )
  },
];

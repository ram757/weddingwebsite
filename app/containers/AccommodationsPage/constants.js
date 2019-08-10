import React from 'react';
import MapMarkerSays from '../../components/MapMarkerSays';
import { AVATAR } from '../../components/SomebodySays/constants';

export const HOTEL_LOCATIONS = [
  {
    lat: 40.440593,
    lng: -79.996588,
    hoverComponent: (
      <MapMarkerSays
        whoSays={AVATAR.EDGAR}
        headerText={(
          <div>
            Amazing hotel located in the Downtown area of Pittsburgh!  A hotel block has been reserved here.
          </div>
        )}
        markerLocation="530 William Penn Pl, Pittsburgh, PA 15219"
        buttonContent="The Omni William Penn Hotel"
      />
    )
  },
  {
    lat: 40.439439,
    lng: -79.959401,
    hoverComponent: (
      <MapMarkerSays
        whoSays={AVATAR.CYNDAQUIL}
        headerText={(
          <div>
            Cheaper hotel located right in Oakland.  Very close to the wedding venue.
          </div>
        )}
        markerLocation="3454 Forbes Ave, Pittsburgh, PA 15213"
        buttonContent="Hilton Garden Inn Pittsburgh University Place"
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
            Nice hotel located right in Oakland.  Pretty close to the wedding venue.
          </div>
        )}
        markerLocation="3341 Forbes Ave, Pittsburgh, PA 15213"
        buttonContent="Residence Inn by Marriott Pittsburgh Oakland/University Place"
      />
    )
  },
  {
    lat: 40.431208,
    lng: -79.959956,
    hoverComponent: (
      <MapMarkerSays
        whoSays={AVATAR.CYNDAQUIL}
        headerText={(
          <div>
            A cheaper hotel option that is just outside of the Oakland area.
          </div>
        )}
        markerLocation="329 Technology Dr, Pittsburgh, PA 15219"
        buttonContent="Hotel Indigo Pittsburgh - Technology Center"
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
            Another hotel in the downtown area.
          </div>
        )}
        markerLocation="620 William Penn Pl, Pittsburgh, PA 15219"
        buttonContent="Kimpton Hotel Monaco Pittsburgh"
      />
    )
  },
];

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import SomebodySays from '../SomebodySays';
import { AVATAR } from '../SomebodySays/constants';

function MapMarkerSays(props) {
  const {
    whoSays,
    headerText,
    markerLocation,
    useCoordinates,
    buttonContent,
  } = props;

  function getMarkerLocationLink(link, useCoord) {
    if (useCoord) {
      // latitude/longitude
      return `https://maps.google.com/?ll=${link}`;
    }
    return `https://maps.google.com/?q=${link}`;
  }

  return (
    <div style={{ width: '250px', margin: '0', textAlign: 'center' }}>
      <SomebodySays
        avatar={whoSays || AVATAR.CYNDAQUIL}
        headerText={headerText}
        collapsedComponent={
          <div style={{ width: '100%' }}>
            <Button
              style={{
                textTransform: 'unset',
                textDecoration: 'underline',
                width: '100%',
              }}
              target="_blank"
              href={getMarkerLocationLink(markerLocation, useCoordinates)}
              rel="noopener noreferer"
            >
              {buttonContent}
            </Button>
          </div>
        }
        startExpanded={true}
      />
    </div>
  );
}

MapMarkerSays.propTypes = {
  whoSays: PropTypes.oneOf(Object.values(AVATAR)),
  headerText: PropTypes.element,
  markerLocation: PropTypes.string,
  useCoordinates: PropTypes.bool,
  buttonContent: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

export default MapMarkerSays;

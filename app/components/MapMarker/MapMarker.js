import React from 'react';
import PropTypes from 'prop-types';
import Place from '@material-ui/icons/Place';
import ToolTip from '@material-ui/core/Tooltip';

function MapMarker(props) {
  const {
    markerImage,
    hoverComponent
  } = props;

  return (
    <div>
      <ToolTip
        interactive
        disableFocusListener
        disableTouchListener
        leaveTouchDelay={10000}
        enterTouchDelay={300}
        title={(
          <React.Fragment>
            { hoverComponent }
          </React.Fragment>
        )}
      >
        { markerImage || <Place style={{ color: 'red', position: 'absolute', transform: 'translate(-50%, -50%' }} /> }
      </ToolTip>
    </div>
  );
}

MapMarker.propTypes = {
  markerImage: PropTypes.element,
  hoverComponent: PropTypes.element
};

export default MapMarker;

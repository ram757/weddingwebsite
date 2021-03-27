import React from 'react';
import PropTypes from 'prop-types';

// Material Imports
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AutoRenew from '@material-ui/icons/Autorenew';

// Images and Styles Imports
import { AVATAR, useStyles } from './constants';
import Cyndaquil from './images/cyndaquil_says.jpg';
import Edgar from './images/edgar_says.jpg';
import Wallace from './images/wallace_says.jpg';

/**
 * SomebodySays Component
 *  Renders a card that with an avatar
 *
 * @param props the props sent to the component which support the following:
 *  - avatar
 *  - switchTo
 *  - collapsedComponent
 *  - headerText
 *  - headerTextAlt
 */
const SomebodySays = (props) => {
  const classes = useStyles();
  const {
    avatar,
    headerText,
    headerTextAlt,
    collapsedComponent,
    switchTo,
    startExpanded,
  } = props;

  // Handle state for avatar and card body expansion
  const [whoSays, setWhoSays] = React.useState(avatar);
  const [expanded, setExpanded] = React.useState(
    startExpanded !== undefined ? startExpanded : false,
  );

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  function getSourceFile(avatarName) {
    switch (avatarName) {
      case AVATAR.CYNDAQUIL:
        return Cyndaquil;
      case AVATAR.EDGAR:
        return Edgar;
      case AVATAR.WALLACE:
        return Wallace;
      default:
        return Cyndaquil;
    }
  }

  function getHeaderText() {
    return whoSays === avatar ? headerText : headerTextAlt;
  }

  function handleWhoSaysClick() {
    setWhoSays(whoSays === avatar ? switchTo : avatar);
  }

  function getCardAction() {
    if (collapsedComponent !== undefined) {
      return (
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      );
    }
    if (switchTo !== undefined) {
      return (
        <IconButton
          className={clsx(classes.expand, {
            [classes.switchOpen]: whoSays !== avatar,
          })}
          onClick={handleWhoSaysClick}
          aria-expanded={whoSays !== avatar}
          aria-label="Switch ego"
        >
          <AutoRenew />
        </IconButton>
      );
    }
    return null;
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Avatar
            aria-label={`${whoSays} says`}
            className={classes.avatar}
            src={getSourceFile(whoSays)}
          />
        }
        action={getCardAction()}
        title={
          <div style={{ textAlign: 'center', marginLeft: '-15px' }}>
            <b>
              {whoSays}
              <br />
              says
            </b>
          </div>
        }
      />
      <CardContent style={{ padding: '8px' }}>
        <Typography
          variant="body2"
          color="textSecondary"
          component="div"
          style={{ textAlign: 'center' }}
        >
          {getHeaderText()}
        </Typography>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {collapsedComponent}
      </Collapse>
    </Card>
  );
};

SomebodySays.propTypes = {
  avatar: PropTypes.oneOf(Object.values(AVATAR)),
  switchTo: PropTypes.oneOf(Object.values(AVATAR)),
  collapsedComponent: PropTypes.object,
  headerText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.element,
  ]),
  headerTextAlt: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.element,
  ]),
};

export default SomebodySays;

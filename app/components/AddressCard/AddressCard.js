import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  cardHeader: {
    paddingBottom: '0px',
    fontSize: 26,
    textAlign: 'center'
  },
  content: {
    textAlign: 'center',
    fontSize: 20,
  },
  actions: {
    justifyContent: 'flex-end'
  },
  pos: {
    marginBottom: 12,
  },
});

function AddressCard(props) {
  const classes = useStyles();
  const {
    className,
    titleText,
    bodyText,
    buttonText,
    buttonLink,
    buttonCallback
  } = props;

  return (
    <Card className={className}>
      <CardHeader
        disableTypography
        className={classes.cardHeader}
        title={titleText}
      />
      <CardContent className={classes.content}>
        <Typography variant="body1" component="div" className={classes.content}>
          {
            bodyText
          }
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button
          target="_blank"
          onClick={buttonCallback}
          href={buttonLink}
          rel="noopener noreferer"
        >
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  );
}

AddressCard.propTypes = {
  className: PropTypes.string,
  titleText: PropTypes.string,
  bodyText: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  buttonCallback: PropTypes.func
};

export default AddressCard;

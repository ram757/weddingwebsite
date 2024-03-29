/*
 * RegistryPage
 */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import TitleTextCrunch from '../../components/TitleTextCrunch';
import Salamander from './images/salamander.jpg';
import CrateAndBarrel from './images/crate_and_barrel.jpg';
import CampingPicture from '../../hidden/images/rm_bq_olive_camping.jpg';
import './style.scss';

const newTabHref = {
  target: '_blank',
  rel: 'noopener noreferer',
};
const crateAndBarrel = {
  ...newTabHref,
  href: 'https://www.crateandbarrel.com/gift-registry/brigitte-quirk-and-ryan-mcdonald/r6016155',
};
const worldWildlife = {
  ...newTabHref,
  href: 'http://wwf.worldwildlife.org/site/TR/SpecialOccasion/Panda-Nation?px=14887004&pg=personal&fr_id=1910',
};

const RegistryPage = () => {
  const useStyles = makeStyles({
    card: {
      minWidth: 345,
      maxWidth: 345,
      margin: '15px',
    },
    media: {
      height: 140,
    },
    actions: {
      justifyContent: 'center',
    },
  });

  const classes = useStyles();

  return (
    <div className="registry-page">
      <TitleTextCrunch text="REGISTRY" />
      <Typography variant="h1">
        Your presence at Ryan and Brigitte&apos;s wedding will be the greatest
        gift of all!
      </Typography>
      <Typography variant="h2">
        But if you are compelled by extreme generosity, we thank you in advance!
        <br />
        <br />
      </Typography>
      <hr className="header-hr-bar" />
      <Typography variant="h2">We are registered at</Typography>
      <div className="card-container">
        <Card className={classes.card}>
          <CardActionArea {...crateAndBarrel}>
            <CardMedia
              className={classes.media}
              image={CrateAndBarrel}
              title="Crate and Barrel"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Crate & Barrel
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="center-item"
              >
                To gift miscellaneous worldy items
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.actions}>
            <Button size="small" color="primary" {...crateAndBarrel}>
              Visit
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardActionArea {...worldWildlife}>
            <CardMedia
              className={classes.media}
              image={Salamander}
              title="World Wildlife Foundation"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Wildlife Foundation
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="center-item"
              >
                To give back to the earth
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.actions}>
            <Button size="small" color="primary" {...worldWildlife}>
              Visit
            </Button>
          </CardActions>
        </Card>
      </div>
      <div className="disclaimer-text">
        NOTE: Because we live in New Jersey, we will not be able to bring any
        large gifts home with us after the wedding. We would appreciate your
        consideration to send gifts to our home address if you do choose to
        purchase one.
      </div>
      <div className="stretch-container-16">
        <img src={CampingPicture} alt="Ryan, Brigitte and Olive camping" />
      </div>
    </div>
  );
};

export default RegistryPage;

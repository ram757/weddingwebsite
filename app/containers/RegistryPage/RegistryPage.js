/*
 * AccommodationsPage
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
// import AddressCard from '../../components/AddressCard';
// import PictureDescriptor from '../../components/PictureDescriptor/Loadable';
import Salamander from './images/IMG_0850-min.jpg';
import CrateAndBarrel from './images/crate_and_barrel.jpg';
import './style.scss';

export default function RegistryPage() {
  const useStyles = makeStyles({
    card: {
      minWidth: 345,
      margin: '15px',
    },
    media: {
      height: 140,
    },
    actions: {
      justifyContent: 'center'
    },
  });

  const classes = useStyles();

  return (
    <div className="registry-page">
      <Typography variant="h1">
        Your presence at Ryan and Brigitte&apos;s wedding will be the greatest gift of all!
      </Typography>
      <Typography variant="h2">
        But if you are compelled by extreme generosity, we thank you in advance:<br /><br />
        We are registred at
      </Typography>
      <hr className="header-hr-bar" />
      <div style={{ display: 'inline-flex', justifyContent: 'space-evenly', width: '100%', flexWrap: 'wrap' }}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={CrateAndBarrel}
              title="Crate and Barrel"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Crate & Barrel
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" className="center-item">
                To gift miscellaneous worldy items
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.actions}>
            <Button
              size="small"
              color="primary"
              target="_blank"
              href="https://www.crateandbarrel.com/gift-registry/brigitte-quirk-and-ryan-mcdonald/r6016155"
              rel="noopener noreferer"
            >
              Visit
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={Salamander}
              title="World Wildlife Foundation"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                World Wildlife Foundation
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" className="center-item">
                To give back to the earth
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.actions}>
            <Button
              size="small"
              color="primary"
              target="_blank"
              href="http://wwf.worldwildlife.org/site/TR/SpecialOccasion/Panda-Nation?px=14887004&pg=personal&fr_id=1910"
              rel="noopener noreferer"
            >
              Visit
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
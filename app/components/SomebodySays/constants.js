import { makeStyles } from '@material-ui/core/styles';

export const AVATAR = {
  CYNDAQUIL: 'Cyndaquil',
  EDGAR: 'Edgar'
};

export const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: '300px',
    minWidth: '200px',
  },
  cardHeader: {
    paddingBottom: '0px'
  },
  cardContent: {
    padding: '10px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.complex,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  switchOpen: {
    transform: 'rotate(360deg)',
  },
  avatar: {
    backgroundColor: '#59844B',
  },
}));

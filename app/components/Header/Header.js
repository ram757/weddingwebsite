import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import Modal from '../Modal';
import { ROUTE_MAP } from '../../containers/App/constants';
import Banner from './images/pup_banner.jpg';
import './style.scss';

export const Header = withRouter((props) => <HeaderComponent {...props} />);

class HeaderComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    const { location, history } = this.props;
    const route = this.getInitialRoute(location.pathname);
    this.state = {
      tab: route
    };

    // TODO: do something more elegant
    // Hack to handle tab highlight changes when browser history changes
    history.listen((location, action) => {
      this.handleChangeTab(null, this.getInitialRoute(location.pathname));
    })

    this.modalOnReady = {
      openCallback: null,
      closeCallback: null
    }
  }

  getInitialRoute = (path) => {
    const foundRoute = Object.values(ROUTE_MAP).find((route) => route === path);
    return foundRoute || ROUTE_MAP.HOME;
  };

  handleChangeTab = (event, newValue) => {
    this.setState({
      tab: newValue
    });
  };

  render() {
    const { tab: tabRoute } = this.state;
    return (
      <div className="header">
        <Link to={"/home"}>
          <img src={Banner} alt="Olive camping" />
        </Link>
        <div className="marquee-wrapper" style={{ backgroundColor: 'yellow' }} onClick={() => {this.modalOnReady.openCallback()}} >
          <div className="marquee" style={{ backgroundColor: 'yellow', fontSize: '32px', display: 'flex', alignItems: 'center'}} >
            <NotificationImportantIcon style={{fontSize: '32px'}} />
            <span style={{fontSize: '32px'}}>CLICK FOR COVID-19 UPDATE</span>
            <NotificationImportantIcon style={{fontSize: '32px'}} />
          </div>
        </div>
        <Modal 
            title={"COVID-19 UPDATE"}
            text={
              "Love is infectious but so is COVID-19.  As a result, we have made the difficult decision to postpone our June 20th, 2020 wedding to June 20th, 2021.  " +
              "Please contact us if you need assistance with travel arrangements.  Invitaitons to be sent in March 2021."
            }
            onReadyObj={this.modalOnReady}
          />
        <Paper square>
          <Tabs
            value={tabRoute}
            indicatorColor="primary"
            textColor="inherit"
            variant="scrollable"
            scrollButtons="on"
            TabIndicatorProps={{ style: { backgroundColor: '#679458' } }}
            onChange={this.handleChangeTab}
          >
            <Tab label="Home" value={ROUTE_MAP.HOME} component={Link} to={ROUTE_MAP.HOME} className="nav-bar-item" />
            <Tab label="RSVP" value={ROUTE_MAP.RSVP} component={Link} to={ROUTE_MAP.RSVP} className="nav-bar-item" />
            <Tab label="Wedding Party" value={ROUTE_MAP.WEDDING_PARTY} component={Link} to={ROUTE_MAP.WEDDING_PARTY} className="nav-bar-item" />
            <Tab label="Guest Accommodations" value={ROUTE_MAP.ACCOMMODATIONS} component={Link} to={ROUTE_MAP.ACCOMMODATIONS} className="nav-bar-item" />
            <Tab label="Pittsburgh" value={ROUTE_MAP.PITTSBURGH} component={Link} to={ROUTE_MAP.PITTSBURGH} className="nav-bar-item" />
            <Tab label="Registry" value={ROUTE_MAP.REGISTRY} component={Link} to={ROUTE_MAP.REGISTRY} className="nav-bar-item" />
            <Tab label="FAQ" value={ROUTE_MAP.FAQ} component={Link} to={ROUTE_MAP.FAQ} className="nav-bar-item" />
          </Tabs>
        </Paper>
      </div>
    );
  }
}

HeaderComponent.propTypes = {
  location: PropTypes.object,
};

export default Header;


/**
 * Old code to add tooltip to header item :)
 */

{/* <Tab
style={{ pointerEvents: 'auto' }}
label={
  <ToolTip
    key="RSVP-tip"
    interactive
    // disableFocusListener
    // disableTouchListener
    leaveTouchDelay={10000}
    enterTouchDelay={50}
    title={(
      <React.Fragment>
        <SomebodySays
          avatar="Edgar"
          headerText="Coming soon..."
          collapsedComponent={(
            <Typography variant="body2" color="textSecondary" component="div" style={{ textAlign: 'center' }}>
              It's too early to RSVP anyway
            </Typography>
          )}
        />
      </React.Fragment>
    )}
  >
    <div>
      RSVP
    </div>
  </ToolTip>
}
value={ROUTE_MAP.RSVP}
// component={Link}
// to={ROUTE_MAP.RSVP}
disabled
className="nav-bar-item"
/> */}

import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { ROUTE_MAP } from '../../containers/App/constants';
import Banner from './images/pup_banner.jpg';
import './style.scss';

export const Header = withRouter((props) => <HeaderComponent {...props} />);

class HeaderComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    const { location } = this.props;
    const route = this.getInitialRoute(location.pathname);
    this.state = {
      tab: route
    };
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
        <img src={Banner} alt="Olive camping" />
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
            <Tab label="RSVP" value={ROUTE_MAP.RSVP} component={Link} to={ROUTE_MAP.RSVP} disabled className="nav-bar-item" />
            <Tab label="Wedding Party" value={ROUTE_MAP.WEDDING_PARTY} component={Link} to={ROUTE_MAP.WEDDING_PARTY} disabled className="nav-bar-item" />
            <Tab label="Guest Accommodations" value={ROUTE_MAP.ACCOMMODATIONS} component={Link} to={ROUTE_MAP.ACCOMMODATIONS} className="nav-bar-item" />
            <Tab label="Pittsburgh" value={ROUTE_MAP.PITTSBURGH} component={Link} to={ROUTE_MAP.PITTSBURGH} disabled className="nav-bar-item" />
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

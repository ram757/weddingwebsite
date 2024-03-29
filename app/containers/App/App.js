/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../HomePage/Loadable';
import BogusPage from '../BogusPage/Loadable';
import WeddingPartyPage from '../WeddingPartyPage/Loadable';
import RSVPPage from '../RSVPPage/Loadable';
import AccommodationsPage from '../AccommodationsPage/Loadable';
import RegistryPage from '../RegistryPage/Loadable';
import PittsburghPage from '../PittsburghPage/Loadable';
import PhotoPage from '../PhotoPage/Loadable';
import FAQPage from '../FAQPage/Loadable';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ROUTE_MAP } from './constants';
import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Header className="header-wrapper" />
    <div className="app-body-wrapper">
      <Switch>
        <Route exact path={ROUTE_MAP.HOME} component={HomePage} />
        <Route exact path={ROUTE_MAP.RSVP} component={RSVPPage} />
        <Route
          exact
          path={ROUTE_MAP.WEDDING_PARTY}
          component={WeddingPartyPage}
        />
        <Route
          exact
          path={ROUTE_MAP.ACCOMMODATIONS}
          component={AccommodationsPage}
        />
        <Route exact path={ROUTE_MAP.PITTSBURGH} component={PittsburghPage} />
        <Route exact path={ROUTE_MAP.REGISTRY} component={RegistryPage} />
        <Route exact path={ROUTE_MAP.BOGUS} component={BogusPage} />
        <Route exact path={ROUTE_MAP.FAQ} component={FAQPage} />
        <Route exact path={ROUTE_MAP.PHOTOS} component={PhotoPage} />
        <Route exact path={ROUTE_MAP.PHOTO} component={PhotoPage} />
        <Route exact path={ROUTE_MAP.PICTURES} component={PhotoPage} />
        <Route path={ROUTE_MAP.EMPTY} component={HomePage} />
      </Switch>
      <Footer />
    </div>
  </div>
);

export default App;

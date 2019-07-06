/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import BogusPage from 'containers/BogusPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Helmet
      titleTemplate="6/20/20 - Ryan ❤️ Brigitte"
      defaultTitle="6/20/20"
    >
      <meta name="description" content="Wedding Website app built with React.js & Redux" />
    </Helmet>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/bogus" component={BogusPage} />
      <Route path="" component={HomePage} />
    </Switch>
    <Footer />
  </div>
);

export default App;

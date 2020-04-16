/* eslint-disable */
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

//import HomePage from 'containers/HomePage/Loadable';
//import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
//import LoginPage from 'containers/LoginPage/Loadable';
import LandingPage from 'containers/LandingPage/Loadable';

import Header from 'components/Header';
import Footer from 'components/Footer';
import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Helmet
      titleTemplate="%s - React.js App"
      defaultTitle="React.js App"
    >
      <meta name="description" content="A React.js based application" />
    </Helmet>
    <Switch>
      <Route path="/landing" component={LandingPage} />
      <Route path="/" component={LandingPage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  </div>
);

export default App;

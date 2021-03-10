import React, { Component, useEffect, useState } from 'react';
import axios from 'axios'
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';

import * as recoil from 'recoil'
import * as atomState from './recoil/atom'
import PrivateRoute from './util/PrivateRoute';
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));




const App = () => {


  const [user, setUser] = recoil.useRecoilState(atomState.userInfo)

  useEffect(() => {
    if (window.localStorage.getItem('llc_token')) {
      // axios.defaults.headers.common['Authorization'] = window.localStorage.getItem('llc_token');
      axios.get('api/users/current', { headers: { "Authorization": window.localStorage.getItem('llc_token') } })
        .then(response => {
          setUser({
            isAuthenticated: true,
            user: response.data
          })
        })
        .catch(err => console.log(err))
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }

  }, [])
  return (
    <HashRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
          <Route exact path="/register" name="Register Page" render={props => <Register {...props} />} />
          <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
          <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} />
          <PrivateRoute path="/" name="Home" component={props => <TheLayout {...props} />} />
          {/* <PrivateRoute path="/" name="Home" render={props => <TheLayout {...props} />} /> */}
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
}

export default App;



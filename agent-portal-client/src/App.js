import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from '../src/components/layout/Home';
import About from '../src/components/layout/About';
import Contact from '../src/components/layout/Contact';
import Register from '../src/components/auth/Register';
import Login from '../src/components/auth/Login';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';
import Profile from './components/dashboard/Profile';
import Listings from './components/dashboard/Listings';
import AddListing from './components/dashboard/AddListing';
//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <PrivateRoute exact path='/profile' component={Profile} />
            <PrivateRoute exact path='/listings' component={Listings} />
            <PrivateRoute exact path='/add-listing' component={AddListing} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;

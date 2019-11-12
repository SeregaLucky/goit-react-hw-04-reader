/* import - node_modules */
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
/* import - CSS */
import './App.css';
/* import - DATA */
import publications from '../../data/publications.json';
/* import - COMPONENT */
import Reader from '../Reader/Reader';
/* import - routes */
import routes from '../../routes';

/*
 * COMPONENT
 */
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path={routes.READER}
        render={props => <Reader {...props} publications={publications} />}
      />

      <Redirect to={routes.READER} />
    </Switch>
  </BrowserRouter>
);

export default App;

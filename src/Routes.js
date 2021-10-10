/* eslint-disable import/no-cycle */
import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Table from './containers/Table';
import Header from './containers/Header';
import Structure from './containers/Table';

const mainRoute = '/structure';

function Routes(props) {
  return (
    <Suspense>
      <Switch>
        <Redirect exact from="/" to={mainRoute} />
        
        <Route path="/structure">
          <Header/>
        </Route>

        <Route path="/table">
          <Structure/>
        </Route>
      </Switch>
    </Suspense>
  );
}

export default Routes;

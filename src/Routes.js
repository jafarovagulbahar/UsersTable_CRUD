/* eslint-disable import/no-cycle */
import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Table from './containers/Table';
import Header from './containers/Header';

const mainRoute = '/home';

function Routes(props) {
  return (
    <Suspense>
      <Switch>
        <Redirect exact from="/" to={mainRoute} />
        
        <Route path="/home">
          <Header/>
        </Route>

        <Route path="/structure">
          <Table/>
        </Route>
      </Switch>
    </Suspense>
  );
}

export default Routes;

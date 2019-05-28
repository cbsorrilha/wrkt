import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Routes = () => (
  <Router>
    <Suspense fallback={<div>Carregando...</div>}>
      <Route
        path="/:name"
        component={lazy(() => import('./components/workout'))} />
      <Route
        path="/"
        exact={true}
        component={lazy(() => import('./components/home'))} />
    </Suspense>
  </Router>
);

export default Routes;

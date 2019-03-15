import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import FactoriesList from './components/FactoriesList'

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/factories-list' component={FactoriesList} />
  </Layout>
);

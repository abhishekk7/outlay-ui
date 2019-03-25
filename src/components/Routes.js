import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import TransactionsPage from './pages/Transactions';
import TrendsPage from './pages/Trends';
import LoginPage from './pages/Login';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/home' component={HomePage} />
        <Route path='/transactions' component={TransactionsPage} />
        <Route path='/trends' component={TrendsPage} />
        <Route path='/login' component={LoginPage} />
      </Switch>
    );
  }
}

export default Routes;

import React, { Component } from 'react';
import ReactElement from './components/ReactElement'
import ProductList from '../src/components/ProductList'
import ListBarang from '../src/components/list_barang/ListBarang'
import TimersDashboard from '../src/components/timer/TimersDashboard'

import TimerDashboard from '../src/components/timerNew/TimerDashboard'
// import 'antd/dist/antd.css';
import { BrowserRouter as Router,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <Route path='/' exact component={ReactElement} />
        <Route path='/productlist' exact component={ProductList} />
        <Route path='/barang' component={ListBarang} />
        <Route path='/timer' component={TimersDashboard} />
        <Route path='/timernew' component={TimerDashboard} />
      </Router>
    )
  }
}
export default App;

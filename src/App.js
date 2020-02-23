import React, { Component } from 'react';
import ProductList from '../src/components/ProductList'
import ListBarang from '../src/components/list_barang/ListBarang'
import TimersDashboard from '../src/components/timer/TimersDashboard'
// import 'antd/dist/antd.css';
import { BrowserRouter as Router,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <Route path='/' exact component={ProductList} />
        <Route path='/barang' component={ListBarang} />
        <Route path='/timer' component={TimersDashboard} />
      </Router>
    )
  }
}
export default App;

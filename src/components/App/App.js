import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Dashboard from '../Dashboard/Dashboard';
import ManageOwners from '../ManageOwners/ManageOwners';
import './App.css';

class App extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Nav />
          <Route path="/" component={Dashboard} />
          <Route path="/manage" component={ManageOwners} />
        </div>
      </Router>
    )
  }
}

const putStateOnProps = (reduxState) => {
  return (
    {
      reduxState
    }
  )
}

export default connect(putStateOnProps)(App);
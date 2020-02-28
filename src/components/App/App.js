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
    this.props.dispatch({ type: 'GET_PETS' });
    this.props.dispatch({ type: 'GET_OWNERS' });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <br></br>
          <Nav />
          <br></br>
          <Route exact path="/" component={Dashboard} />
          <Route path="/owners" component={ManageOwners} />
        </div>
      </Router>
    )
  }
}

export default connect()(App);
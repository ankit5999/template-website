import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import 'bootstrap/dist/css/bootstrap.css';
import {Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';
import Holilink from './Holitemplate/Holilink';


class App extends Component {
  render() {
    return (
      <>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home}></Route>
      <Holilink />
      <Redirect exact to="/holi1" />
      </Switch>
      <Footer />
      </>
    );
  }
}

export default App;
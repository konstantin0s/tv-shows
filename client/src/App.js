import React, { Component } from 'react';
import './App.css';
import OneShow from './components/backend/OneShow';
import Series from './components/backend/Series';
import People from './components/backend/People';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/backend/Header';
import Footer from './components/backend/Footer';

export default class App extends Component {

  render() {
    return (
<Router>
<div className="App">

<Header />
<Switch>
<Route exact path="/" component={Series} />
<Route exact path="/people" component={People} />

<Route
              path="/show/:id"
              render={(request) => {
                const id = request.match.params.id;
                console.log(id);
                return <OneShow id={id} />;
              }}
            />
</Switch>
<Footer />
      </div>
</Router>
    );
  }
}

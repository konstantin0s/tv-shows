import React, { Component } from 'react';
import './App.css';
import Intro from  './components/Intro/Intro';
import OneShow from './components/backend/OneShow';
import Series from './components/backend/Series';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export default class App extends Component {

  render() {
    return (
<Router>
<div className="App">
<Intro message="Here you can find 
all of your most loved series
" />

<Switch>
<Route exact path="/" component={Series} />

<Route
              path="/show/:id"
              render={(request) => {
                const id = request.match.params.id;
                console.log(id);
                return <OneShow id={id} />;
              }}
            />
</Switch>

      </div>
</Router>
    );
  }
}

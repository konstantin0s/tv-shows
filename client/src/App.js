import React, { Component } from 'react';
import './App.css';
import Intro from  './components/Intro/Intro';
import Series from './components/containers/Series'

export default class App extends Component {

  render() {
    return (
      <div className="App">
<Intro message="Here you can find 
all of your most loved series
" />


<Series />
      </div>
    );
  }
}

import React, { Component } from 'react';
import Header from './Header';
import FamousPerson from './FamousPerson';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br></br>
        <FamousPerson />
      </div>
    );
  }
}

export default App;

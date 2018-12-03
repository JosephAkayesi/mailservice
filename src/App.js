import React, { Component } from 'react';
import Mailing from './components/Mailing/Mailing';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="mt-5">
          <Mailing />
        </div>
      </div>
    );
  }
}

export default App;

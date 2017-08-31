import React, { Component } from 'react';
import MessageBoard from './containers/MessageBoard.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MessageBoard />
      </div>
    );
  }
}

export default App;

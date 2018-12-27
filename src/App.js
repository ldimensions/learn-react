import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            Learn React  
            <Person />       
        </header>
      </div>
    );
  }
}

export default App;

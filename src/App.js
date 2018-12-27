import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    Person: [
      { name: 'manu' }
    ]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            Learn React  
            <Person name={this.state.Person[0].name}>Children Elements</Person>       
        </header>
      </div>
    );
  }
}

export default App;

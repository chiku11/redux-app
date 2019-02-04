import React, { Component } from 'react';
import './App.css';
import Counter from './components/CounterComponent';
import ContactComponent from './components/ContactComponent';

class App extends Component {
  render() {
    return (

      <div className="App">
        <Counter />
        <ContactComponent />
      </div>
    );
  }
}

export default App;

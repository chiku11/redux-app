import React, { Component } from 'react';
import './App.css';
import Counter from './components/CounterComponent';
import ContactComponent from './components/ContactComponent';
import ContactInfoComponent from './components/ContactInfoComponent';

class App extends Component {
  render() {
    return (

      <div className="App">
        <Counter />
        <ContactComponent /> <ContactInfoComponent />
      </div>
    );
  }
}

export default App;

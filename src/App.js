import React, { Component } from 'react';
import './App.css';
import Login from './containers/Login/Login';
import Products from './containers/Products/Products';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Products/>
      </div>
    );
  }
}

export default App;

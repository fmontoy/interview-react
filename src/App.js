import React, { Component } from 'react';
import './App.css';
import Page from './navigation/Page/Page';
import {BrowserRouter} from 'react-router-dom';
class App extends Component {
  render() {
    return (
    <BrowserRouter>
    <Page/>
    </BrowserRouter>          
    );
  }
}

export default App;

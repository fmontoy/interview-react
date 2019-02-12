import React, { Component } from 'react';
import './App.css';
import Modal from './components/UI/Modal/Modal';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Wolox Technical test
        </header>
        <Modal>
          <h1>Probando</h1>
          <p><b>Estoy Viendo como se ve esto</b></p>
        </Modal>
      </div>
    );
  }
}

export default App;

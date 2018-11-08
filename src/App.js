import React, { Component } from 'react';
import Main from './Main';
import Header from './Header';
import './App.css';




class App extends Component {
  render() {
    return (
      <div style={{ height: '100vh' }}>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;

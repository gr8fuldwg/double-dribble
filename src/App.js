import React from 'react';
import Main from './Main';
import Header from './Header';
import './App.css';
import FullPageView from './layouts/FullPageView';



function App(props) {
  return (
    <FullPageView>
      <Header />
      <Main />
    </FullPageView >
  );
}


export default App;

import React from 'react';
import './App.css';

//myComponents
import Header from './components/header/Header';
import MView from './components/main-view/MView';
import LMBox from './components/left-menu/list-menu-box/LMBox';

function App() {
  return (
    <div className="App">
      <Header viewName="Employee"/>
      <LMBox/>
      <MView/>
    </div>
  );
}

export default App;

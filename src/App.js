import React, {Component} from 'react';
import './App.css';
import Die from './Die';

function App() {
  return (
    <div className="App">
      <Die face='five'/>
      <Die face='three'/>
      <Die face='four'/>    
    </div>
  );
}

export default App;

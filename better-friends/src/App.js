import React from 'react';
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <strong>Better Friend </strong>
       <p>- an app that makes you seem like a better friend by making you a lazier one <span>👻</span></p>
      </header>
      <Login />
    </div>
  );
}

export default App;

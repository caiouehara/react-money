import React from 'react';
import '../css/App.css';
import Nav from './Nav/Nav';
import EurExchange from './EurExchange/EurExchange';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <EurExchange></EurExchange>
    </div>
  );
}

export default App;
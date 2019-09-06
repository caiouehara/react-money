import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import EurExchange from './EurExchange/EurExchange';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="nav">
          <div className="nav-menu">
            <Link to="/"><button>Home</button></Link>
            <Link to="/eur-exchange"><button>Eur Exchange</button></Link>
          </div>
        </div>
        
        <Route path="/" exact/>
        <Route path="/eur-exchange" component={EurExchange}/>
      </Router>
      <p>Home</p>
    </div>
  );
}

export default App;
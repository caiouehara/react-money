import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import EurExchange from './EurExchange/EurExchange';
import Login from './Login/Login';
import Home from './Home/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <div className="nav">
          <div className="nav-menu">
            <Link to="/"><button>Home</button></Link>
            <Link to="/eur-exchange"><button>Eur Exchange</button></Link>
            <Link to="/login"><button>Login</button></Link>
          </div>
        </div>
        
        <Route path="/" exact component={Home}/>
        <Route path="/eur-exchange" component={EurExchange}/>
        <Route path="/login" component={Login}/>
      </Router>
    </div>
  );
}

export default App;
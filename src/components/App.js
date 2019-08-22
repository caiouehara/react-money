import React from 'react';
import '../css/App.css';
import ReferenceCoin from './ReferenceCoin';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>EUR EXCHANGE BASE</h2>
        <ReferenceCoin></ReferenceCoin>
      </div>
    );
  }
}

export default App;

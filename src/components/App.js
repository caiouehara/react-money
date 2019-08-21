import React from 'react';
import '../css/App.css';
import ReferenceCoin from './ReferenceCoin';

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <ReferenceCoin></ReferenceCoin>
        </div>
    );
}
}

export default App;

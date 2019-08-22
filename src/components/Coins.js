import React from 'react';
import Graphs from './Graphs';

class Coins extends React.Component {
  render() {
    return (
      <div className="Coins">
        <p>BRL {this.props.CoinsObject.BRL}</p>
        <p>CAD {this.props.CoinsObject.CAD}</p>
        <p>CNY {this.props.CoinsObject.CNY}</p>

        <Graphs></Graphs>
      </div>
    );
  }
}

export default Coins;

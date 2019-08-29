import React from 'react';
import Graphs from './Graphs/Graphs';

class Coins extends React.Component {
  render() {
    return (
      <div className="Coins">
        <p>BRL {this.props.CoinsObject.BRL}</p>
        <p>CAD {this.props.CoinsObject.CAD}</p>
        <p>CNY {this.props.CoinsObject.CNY}</p>

        <Graphs
          CoinsObject={this.props.CoinsObject}
          dateRate={this.props.dateRate}
        />
      </div>
    );
  }
}

export default Coins;

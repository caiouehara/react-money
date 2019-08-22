import React from 'react';

class Coins extends React.Component {
  render() {
    return (
      <div className="Coins">
        <p>BRL {this.props.CoinsObject.BRL}</p>
        <p>CAD {this.props.CoinsObject.CAD}</p>
        <p>CNY {this.props.CoinsObject.CNY}</p>
      </div>
    );
  }
}

export default Coins;

import React from 'react';

class DateRate extends React.Component {
  render() {
    return (
      <div className="DateRate">
        <h3>{this.props.dateRate}</h3>
      </div>
    );
  }
}

export default DateRate;
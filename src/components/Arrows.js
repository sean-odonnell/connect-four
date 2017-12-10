import React, { Component } from 'react';

class Arrows extends Component {

  render() {
    
    const cells = [];

    for (let y = 0; y >= 0; y--) {
      const rows = [];

      for (let x = 0; x < 7; x++) {
        rows.push(<div className='arrow' key={x} x={x} y={y} status='empty'><p></p></div>)
      }
      cells.push(<div key={y} className='row'>{rows}</div>)
    }

    return (
      <div>
        {cells}
      </div>
    );
  }
}
export default Arrows;


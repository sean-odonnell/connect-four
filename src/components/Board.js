import React, { Component } from 'react';
import GridCell from './GridCell.js';

class Board extends Component {

  constructor(props){
    super(props);
    this.state = { 
      turn: 'red',
      board: [
        [], // col 1
        [], // col 2
        [], // col 3
        [], // col 4
        [], // col 5
        [], // col 6
        [], // col 7
      ]
    };
    
    this.highlightCell = this.highlightCell.bind(this);
  }

  highlightCell (column) {
    console.log(column)
    let newBoard = this.board[column].push(this.state.turn);
    this.setState({board: newBoard})
    this.changeTurn();
  }

  changeTurn () {
    if (this.state.turn === 'red') {
      this.setState({turn: 'blue'});
    } else {
      this.setState({turn: 'red'});
    }
   }


  render() {
    let board = this.state.board;
    const cells = [];

    for (let y = 5; y >= 0; y--) {
      const rows = [];

      for (let x = 0; x < 7; x++) {
        rows.push(<GridCell key={x} x={x} y={y} turn={this.state.turn} board={this.state.board} onDrop={this.highlightCell}/>)
      }
      cells.push(<div key={y} className='row'>{rows}</div>);
    }

    return (
    <div className='board'>
      <div className='board-inner'>
        {cells}
      </div>
    </div>
    );
  }
}

export default Board;




import React, { Component } from 'react';
  {
    this.props.onDrop(this.col);
    console.log('clicked on ' + this.props.x + ' , ' + this.props.y + ' , ' + this.props.turn)
  }

  render() {
    let board = this.props.board;
    const col = this.props.x;
    const row = this.props.y;
    let color = 'cell';

    if (board[col][row] !== undefined) {
      if (board[col][row] === 'red') {
        color += ' red';
      } else {
        color += 'blue';
      } 
    }

    return (
      <div className={color} onClick={() => this.handleClick()}>
        {board[col][row]}
      </div>  
    )
  }
}

export default GridCell;

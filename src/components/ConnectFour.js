import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import '../styles/styles.css';
import Header from './Header.js';
import Board from './Board.js';
import Arrows from './Arrows.js';

class ConnectFour extends Component {

  render() {
    return (
      <div className='ConnectFour'>
        <Container>
          <Header />
          <Arrows />
          <Board />
        </Container>
      </div>
    );
  }
}

export default ConnectFour;

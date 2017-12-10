import React, { Component } from 'react';
import { Header, Icon } from 'semantic-ui-react'

class HeaderSection extends Component {

  render() {

    return (
     <Header className='flex-container'>
	    <Icon name='trophy' color='teal' size='huge' />
	      <h1>Connect Four</h1>
	  </Header>
    );
  }
} 

export default HeaderSection;
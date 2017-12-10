import React, { Component } from 'react';
import { Grid, Message, Icon } from 'semantic-ui-react'

class Footer extends Component {

  render() {

    return (
   	<div>
  		<Grid>
  			<Grid.col>
  				<Message icon>
				    <Icon name='circle' color={'green'} />
				    <Message.Content>
				      <Message.Header>Player 1</Message.Header>
				      {'current turn'}
				    </Message.Content>
				  </Message>
  			</Grid.col>
  			<Grid.col>
  				<Message icon>
				    <Icon name='circle' color={'red'} />
				    <Message.Content>
				      <Message.Header>Player 1</Message.Header>
				      
				    </Message.Content>
				  </Message>
  				<Message icon>
				    <Icon name='circle' color={'green'} />
				    <Message.Content>
				      <Message.Header>Player 2</Message.Header>
				      
				    </Message.Content>
				  </Message>
  			</Grid.col>
  		</Grid>
  	</div>
    );
  }
}

export default Footer;
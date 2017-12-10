import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import ConnectFour from './components/ConnectFour.js';
import registerServiceWorker from './registerServiceWorker';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Lobster:300,400,700', 'cursive']
  }
});

ReactDOM.render(<ConnectFour />, document.getElementById('root'));
registerServiceWorker();

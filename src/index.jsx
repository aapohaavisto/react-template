/******** DO NOT DELETE THESE LINES ********/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './assets/stylesheets/style.css'

/****** ADD YOUR CODE AFTER THIS LINE ******/

const Hello = () => (
    <marquee direction='up' behavior='alternate' scrollamount='31'>
      <marquee direction='right' behavior='alternate' scrollamount='19'>
        <img src='tenor.png'></img>
      </marquee>
    </marquee>
);

class App extends Component {
  render() {
    return (
      <Hello />
    );
  }
}

/****** DO NOT DELETE AFTER THIS LINE ******/

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

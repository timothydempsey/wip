import React, { Component } from 'react';
//import logo from './logo.svg';
import painting from './nyack-life-1-dog.jpg';
import './App.css';
//import Footer from './Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">



        <header className="App-header">
        <h1>DEMPSEYSTUDIO</h1>
            <h2 className="tagline">Work(s) In Progress</h2>
        </header>

        <img src={painting} className="heroImage" alt="Portrait" />

</div>
    );
  }
}

export default App;

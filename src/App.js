import React, { Component } from 'react';
//import logo from './logo.svg';
import painting from './nyack-life-1-dog.jpg';
import sketch from './nyack-homes-1-sketch.jpg';
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
          <div>
          <h3>A Boy and his Dog</h3>
          <p>
          This oil-on-canvas is stalled a little longer than I would like.
          Estimated another 8 - 10 hours and I can call it complete.
          </p>
          <img src={painting} className="heroImage" alt="Oil Painting" />

          <h3>Rooftops of Nyack (Working Title)</h3>
          <p>
          This study is the basis of a larger piece, which may or may not be executed in pastel on paper. I reserve the right to change my mind on the medium. May go with oil or acrylic paint on canvas.
          </p>
          <img src={sketch} className="heroImage" alt="Sketch" />

          </div>
        </div>
    );
  }
}

export default App;

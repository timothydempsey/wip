import React, { Component } from 'react';
//import logo from './logo.svg';
import painting from './nyack-life-1-dog.jpg';
import sketch from './nyack-homes-1-sketch.jpg';
import './App.css';
import Facebook from 'react-icons/lib/fa/facebook';
import Twitter from 'react-icons/lib/fa/twitter';
import Linkedin from 'react-icons/lib/fa/linkedin';
import Pinterest from 'react-icons/lib/fa/pinterest-square';
import Instagram from 'react-icons/lib/fa/instagram';
import { FaBehance } from 'react-icons/lib/fa';
import Email from 'react-icons/lib/fa/envelope';

//import Footer from './Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>DEMPSEYSTUDIO</h1>
            <h2 className="tagline">Work(s) In Progress</h2>
            <div id="socialMedia">
              <a href="https://www.facebook.com/dempseystudio" target="_blank" rel="noopener noreferrer">
                <Facebook />
              </a>
              <a href="https://twitter.com/DempseyStudio" target="_blank" rel="noopener noreferrer">
                <Twitter />
              </a>
              <a href="https://www.linkedin.com/in/timothydempsey/" target="_blank" rel="noopener noreferrer">
                <Linkedin />
              </a>
              <a href="https://www.pinterest.com/dempseystudio/" target="_blank" rel="noopener noreferrer">
                <Pinterest />
              </a>
              <a href="https://www.instagram.com/timothyadempsey/" target="_blank" rel="noopener noreferrer">
                <Instagram />
              </a>
              <a href="https://www.behance.net/dempseystudio/" target="_blank" rel="noopener noreferrer">
                <FaBehance />
              </a>
              <a href="mailto:tim@dempseystudio.com">
                <Email />
              </a>
            </div>
        </header>

        <div>
            <h2>News</h2>
            <p>I am currently working on pieces for Artwalk 2019 in my new hometown. While I have not committed to the event at this writing, it quickly became a goal when we moved in last June, right at the kick-off of last year's Artwalk. Stay tuned for more updates on this.</p>
            <h3>Rooftops of Nyack (Working Title)</h3>
              <p>
              This study is the basis of a larger piece, which may or may not be executed in pastel on paper. I reserve the right to change my mind on the medium. May go with oil or acrylic paint on canvas.
              <br/>
              <cite>UPDATE: Image complete. <a href="http://dempseystudio.com" target="_blank">Visit dempseystudio.com</a></cite>
              </p>
                <img src={sketch} className="heroImage" alt="Sketch" />
             <h3>A Boy and his Dog</h3>
              <p>
              This oil-on-canvas is stalled a little longer than I would like.
              Estimated another 8 - 10 hours and I can call it complete.
              </p>
                <img src={painting} className="heroImage" alt="Oil Painting" />


          </div>
        </div>
    );
  }
}

export default App;

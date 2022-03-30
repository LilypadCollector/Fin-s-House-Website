import './App.css';
import './components/home'
import Home from './components/home';
import Mission from './components/mission';
import Hours from './components/hours';
import Location from './components/location'
import Photos from './components/photos'
import Footer from './components/footer'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";

/* TODO
- Make font smaller for hours on mobile.

- 
*/

function App() {

  return (
    <div id="body">
      <ScrollUpButton id="scroll-up-button"/>
      <Home />
      <Mission />
      <div id="div-hours-location">
        <Hours />
        <Location />
      </div>
      <Footer />
      {/* <div className="page" reference={hoursRef}>f</div>
      <div className="page">f</div>
      <div className="page">f</div>
      <div className="page">f</div> */}
    </div>
  );
}

export default App;

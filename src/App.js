import React from 'react';
import logo from './assets/img/lopan2.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-container">
          <h1>易經卜卦<br/>Iching Calculator</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>This is my practice project using <a href="https://reactjs.org" target="_blank">ReactJS</a></h2>
          <h3>Project Summary:</h3>
          <ul>
            <li>What is Iching and uses</li>
            <li>Iching calculation method -
              <ul>
                <li>Specific and/or random Numbers</li>
                <li>Birthday</li>
                <li>Brieft explaination</li>
              </ul>
            </li>
            <li>Lunar Calendar
              <ul>
                <li>Regular Calendar to Lunar calendar conversion</li>
                <li>Attach holidays</li>
              </ul>
            </li>
            <li>Iching references</li>
          </ul>
          <h1>Under construction - Stay Tuned!</h1>
        </div>
      </header>
    </div>
  );
}

export default App;

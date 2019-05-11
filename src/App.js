import React from 'react';
import logo from './assets/flamms.png';
import Countdown from 'react-countdown-now';
import './App.css';

function App() {
  const renderer = ({days, hours, minutes, seconds}) => <span>{days} d : {hours} h : {minutes} m : {seconds} s</span>;

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <Countdown 
            date={"May 25, 2019 12:00:00"} 
            renderer={renderer}/>
        </h1>
        <img src={logo} alt="logo" />
      </header>
    </div>
  );
}

export default App;

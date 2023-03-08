import { useState } from 'react'
import './App.css'
import Counter from './components/counter.jsx'


export default function App() {
  const [timer, setTimer] = useState({
    isSession: false,
    currentTimer: "Session",
    breakLength: 5,
    sessionLength: 25, 
    isCountingDown: false,
    clockCount: null,
  })


  function toggleTimer() {
    setTimer(prevTimer => ({
      ...prevTimer, 
      isSession: !prevTimer.isSession,
      currentTimer: timer.currentTimer === "Session" ? "Session" : "Break",
      clockCount: 
        convertToTime(timer.isSession === false ? timer.sessionLength * 60 : timer.breakLength * 60)
    }));
  }


 function convertToTime (value) {
    let minutes = Math.floor(value / 60);
    let seconds = value % 60;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return `${minutes}:${seconds}`;
  };



   function handleCountDown() {
    setTimer({
      ...timer, 
      isCountingDown: !timer.isCountingDown,
      currentTimer: timer.currentTimer === "Session" ? "Session" : "Break",
      clockCount: 
        convertToTime(timer.isSession ? timer.sessionLength * 60 : timer.breakLength * 60)
    })

    }

  return (
    <main >
      <h1>Time Left: {timer.clockCount} </h1>
      
      <button onClick={toggleTimer}>{timer.isSession ? "Session" : "Break"}</button>
      <button onClick={handleCountDown} > {timer.isCountingDown ? "pause" : "play"}
      </button>
      <br/>
      <span>{timer.clockCount} {timer.isCountingDown ? "On" : "Off"}</span>

      <Counter id="Break" />
      <Counter id="Session" />
    </main> 
  );
}










import { useState, useEffect } from 'react'

export default function App() {
  
  const [countdown, setCountdown] = useState({
    currentTimer: "session", 
    isPlaying: false,
    startTime: 1500,
  })

  const [time, setTime] = useState(countdown.startTime);

  function increment() {
      setTime(time +60)
    }
  
  function decrement() {
    setTime(time -60)
  }
  
  function toggleTimer() {
    setCountdown(prevCountdown =>({
      ...prevCountdown,
      isPlaying: false,
      currentTimer: prevCountdown.currentTimer === "session" ? "break" : "session",
      startTime: prevCountdown.currentTimer === "session" ? setTime(300) : setTime(1500),
    }))

  }

  function togglePlayPause() {
    setCountdown({
      ...countdown,
      isPlaying: !(countdown.isPlaying),
    })
  }


  
  
  
  return (
    <div>
      <h1>{countdown.currentTimer} time left: {convertToTime(time)} </h1>
        <button onClick={increment} >+</button>
        <button onClick={decrement} >-</button>
      <Timer {...countdown}/>
      <br/>
      <button onClick={toggleTimer}>{countdown.currentTimer}</button>
      <button onClick={togglePlayPause}>{countdown.isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
}

function convertToTime(count) {
    let minutes = Math.floor(count / 60);
    let seconds = count % 60;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return `${minutes}:${seconds}`;
  };



function Timer(props){
    
    if (props.time === 0) {
      toggleTimer()
      setTime(props.startTime)
    }
    
    function tick() {
      if (props.time > 0 && props.isPlaying) {setTime(props.time -1)};
    }
      
      useEffect(() => {
        const timerId = setInterval(tick, 1000);
        return function cleanup() {
          clearInterval(timerId);
        };
      }, [tick]);
  }
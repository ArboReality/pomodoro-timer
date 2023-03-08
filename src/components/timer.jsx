/* import { useState } from 'react'
const SetTimer = (props) => {
  const value = props.value
  const category = props.title.toLowerCase();
  
  const [count, setCount] = useState(props.value)
  
  function decrement(){
    setCount(count -1)
  }

  function increment(){
    setCount(count +1)
  }


  function reset(){
    setCount(props.value)
  }
  
  return (
    <div className="time-adjustment-wrapper">
      <p id={`${category}-label`}>{props.title} Length</p>
      <div className="button-wrapper">
        <button id={`${category}-decrement`} onClick={decrement}>
          -
        </button>
        <span id={`${category}-length`}>{count}</span>
        <button id={`${category}-increment`} onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
}

export default SetTimer;

*/
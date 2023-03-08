import {useState} from 'react'
export default function Counter({id}) {

    function increment() {
      setCount(count +1)
    }

    function decrement() {
      setCount(count -1)
    }

  const [count, setCount] = useState(0)
  return(
    <div>
      <p id={id.toLowerCase()+"-label"}> {id} </p>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  )
} 
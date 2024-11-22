import { useState } from 'react'
import './App.css'
//This counter ranges from 0 to 20
//This project showcases the usage of useState  Hook.
function App() {
  const [count, setCount] = useState(0)
  const increment=()=>{
    if(count<20)
    setCount(count+1)
  }
  const decrement=()=>{
    if(count>0)
    setCount(count-1)
  }
  return (
    <>
    <h1>The currrent count is: {count}</h1>
    <div><button onClick={increment}>Increase Counter</button></div>
    <div><button onClick={decrement}>Decrease Counter</button></div>
    </>
  )
}

export default App

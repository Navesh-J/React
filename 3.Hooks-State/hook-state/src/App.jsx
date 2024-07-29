import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
useEffect(() => {
  alert("Count Updated");
}, [count])

  return (
    <>
    <div>The Count is : {count}</div>
    <button onClick={()=>{setCount(count+1)}}>Increment Count</button>
    <button onClick={()=>{setCount(count-1)}}>Decrement Count</button>
    <button onClick={()=>{setCount(count*2)}}>Double Count</button>
    <button onClick={()=>{setCount(count/2)}}>Halve Count</button>
    <button onClick={()=>{setCount(0)}}>Reset</button>
    </>
  )
}
export default App

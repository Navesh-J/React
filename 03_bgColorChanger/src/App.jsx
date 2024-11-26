import { useState } from 'react'
import './App.css'
import Color_bar from './Components/Color_bar'
function App() {
  const [color,setColor]=useState("olive");
  return (
    <div className='w-full h-screen flex justify-center duration-500' style={{backgroundColor: color}}>
    <Color_bar setColor={setColor} />
    </div>
  )
}

export default App

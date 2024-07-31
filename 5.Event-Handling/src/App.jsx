import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  //const [name, setname] = useState("")
  const [form, setForm] = useState({email:"",phone:""})
  const handleClick=()=>{
    alert("You Clicked the Button.")
  }
  const handleMouseOver=()=>{
    alert("You just Hovered over the red Container")
  }
  // const handleName=(e)=>{
  //   setname(e.target.value);
  // }
  const handleForm=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }
  return (
    <>
      <div>
        <button onClick={handleClick}>Click Me !</button>
      </div>
      <div className='red' onClick={handleMouseOver}>
        I am a Red Container.
      </div>
      <input type="text" name="email" value={form.email} onChange={handleForm} />
      <input type="text" name="phone" value={form.phone} onChange={handleForm} />
    </>
  )
}

export default App

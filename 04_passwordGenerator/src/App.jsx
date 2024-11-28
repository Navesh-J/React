import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  //useState Hooks
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")

  //useRef Hook
  const passwordRef=useRef(null);

  //useCallback Hook
  const genratePassword= useCallback(function(){
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let pass=""
    if(number) str+="0123456789"
    if(character) str+="!@#$%^&*()_-+=~`:,.?;{}[]"
    for(let i=0;i<length;i++){
      let index=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(index)
    }
    setPassword(pass)
  },[length,number,character,setPassword])

  //useEffect Hook
  useEffect(function(){genratePassword()},[length,number,character,setPassword])
  
  const copyPassword=useCallback(function(){
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <div className='bg-gray-950 w-full h-screen flex items-center text-gray-300' >
      <div className='w-full bg-slate-800 shadow-md rounded-lg px-4 pb-4 text-amber-600 mx-auto max-w-md '>
      <h1 className='text-white text-center my-4'>PASSWORD GENERATOR</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-8 text-violet-900 font-bold'>
        <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
        />
        <button onClick={copyPassword} className='outline-none bg-emerald-500 text-black px-3 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range" 
            min={8}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
          />
          <label >Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={number}
          id='numberInput'
          onChange={()=>{
            setNumber((prev)=>!prev);
          }}
          />
          <label htmlFor='numberInput'> Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={character}
          id='characterInput'
          onChange={()=>{
            setCharacter((prev)=>!prev);
          }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
      </div>
    </div>
  )
}

export default App

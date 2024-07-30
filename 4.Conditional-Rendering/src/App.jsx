import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showBtn, setShowBtn] = useState(false)
  const [todos, settodos] = useState([
    {
      title:"Hey I am Personal",
      desc:"I am todo 1"
    },
    {
      title:"Hey I am Professional",
      desc:"I am todo 2"
    },
    {
      title:"Hey I am Grocery",
      desc:"I am todo 3"
    }
  ])

  const Todo= ({todo})=>{
    return (<>
    <div className="m-4 border border-1 border-purple-900">
    <div className="todo">{todo.title}</div>
    <div className="todo">{todo.desc}</div>
    </div>
    </>)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* {showBtn? <button>Now You see me !</button>:"Now you don't"} */}
      {showBtn && <button>Now you see me!</button>}
      {
        todos.map(todo=>{
          return <Todo key={todo.title} todo={todo}/>
        })
      }
      <div className="card">
        <button onClick={() => setShowBtn(!showBtn)}>
          Click me!        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

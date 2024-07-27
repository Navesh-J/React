//import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {
  const [value,setValue]=useState(0);
  return (
    <div className="App">
      <div className="container">Count = {value}</div>
      <button onClick={()=>{setValue(value+1)}}>Click Me !</button>
      <div className="navbar">
        <ul className='flex'>
          <l1>Home</l1>
          <l1>Contact Us</l1>
          <l1>About Us</l1>
          <l1>Donate!</l1>
        </ul>
      </div>
    </div>
  );
}
export default App;
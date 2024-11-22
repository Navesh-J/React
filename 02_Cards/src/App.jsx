import Card from './components/Card.jsx'
import './App.css'

// a Program that showcases the props in react along with tailwind css

function App() {
  let rand=()=>{
    return Math.ceil(Math.random()*10);
  };
  return (
    <>
     <Card price={rand()} title='Beast 1'/>
     <Card price={rand()} title='Beast 2'/>
     <Card price={rand()}/>
     <Card price={rand()} title='Beast 4'/>
     <Card price={rand()}/>
     <Card price={rand()} title='Beast 6'/>
     <Card price={rand()} title='Beast 1'/>
     <Card price={rand()} title='Beast 7'/>
     <Card price={rand()}/>
     <Card price={rand()} title='Beast 21'/>
     <Card price={rand()}/>
     <Card price={rand()} title='Beast 12'/>
    </>
  )
}

export default App

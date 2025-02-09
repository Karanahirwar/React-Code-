import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
// create state 
// manage state 
// change state

// sabhi child me state ko sync krwaduga 
const [name,setname] = useState('');
return (
    <>
      <div>
    <Card title="card1" name={name} setName={setname}/>
    <Card title="card2" name={name} setName={setname}/>

        {/* <p>I am inside parents component and value 
          of name is {name} </p> */}
       
         </div>
      
    </>
  )
}

export default App

import { useState } from 'react'

import './App.css'
import ChildComponents from './components/ChildComponents';
import { useCallback } from 'react';


function App() {
  const [count, setCount] = useState(0)


  function ClickHandle(){
    setCount(count+1);
  }
const handleClick = useCallback(()=>{
  setCount(count+1)
},[count]);



  return (
    <>
    <div>
      <p>count: {count} </p>
      <button onClick={ClickHandle}>
        Increment
      </button>
      <br /><br /> 


      <div> <ChildComponents 
        handleClick ={handleClick}
      /> </div>
    </div>
    </>
  )
}

export default App

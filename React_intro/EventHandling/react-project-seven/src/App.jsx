// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// function eventHandling(){
//   alert('time line is over ');
// }

// function EventparaHandling(){
//   alert('you click the para  ');
// }

function Enterpassword(e){

  console.log('enter the passward',e.target.value);

  
}

function Submit(e){
e.preventDefault();
alert('confirm the sumbit ');
}

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    {
    <form onSubmit={Submit}>
      <input type="password" onClick={Enterpassword}></input>
      <button>submit </button>
    </form>
    /* <p onMouseMove={EventparaHandling} style={{border: "1px solid blue"}} >
    I am a para</p>
      <button onClick={eventHandling}>click here for apply  </button> */}


    </>
  )
}

export default App

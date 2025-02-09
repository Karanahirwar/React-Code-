import { useState} from 'react'
// import { useEffect } from 'react';
import './App.css'
import { useRef } from 'react';

function App() {

  // useRef hook ka part 1 use 
//   const [count, setCount] = useState(0)
//   let val = useRef(0);

//   function handleIncrement(){
//     val.current = val.current+1;
//     console.log("value of val: ",val.current);
// setCount(count+1)
//   }

//   // every render pr run hoga 
// useEffect(() => {

// console.log("main fir se render ho gya hu ")
  
// })
// part 1 end ho gya h 

const [time,setTime] = useState(0);

 let timerRef = useRef(null);  // useRef hook ek object return krta h 

//  timerRef (ref ) -> ek type ka plain object h 
function startTimer(){
  // setInterval wala function kuch value return kr rha hoga usko
  // usko hm timerRef wale variable me store krege 
  timerRef.current = setInterval(()=>{
    setTime(time=>time+0.01)
  },1000);  
}

function stopTimer(){
   clearInterval(timerRef.current);
   // sb function end hone ke bad timerRef ko initail value per layege 
   timerRef.current=0;
}

function resetTimer(){
  stopTimer();
  setTime(0);
}


  return (
    <>
  <div>
    <h1>   StopWatch: {time} seconds </h1>
      <button onClick={startTimer}>  Start</button>
        <br />
        <br />

      <button onClick={stopTimer}>  Stop</button>
        <br />
        <br />

      <button onClick={resetTimer}> Reset</button>
        <br />
        <br />

          
      
    

  </div>






    {/* part 1 for useRef hook  */}
      {/* <div>
        <button onClick={handleIncrement}>
             Increment
        </button>

        <br />
        <br />
        <p> count is : {count}</p>
      </div> */}
    </>
  )
}

export default App

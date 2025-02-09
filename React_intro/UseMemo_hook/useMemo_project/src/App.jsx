import { useState } from 'react'
import { useMemo } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState(0)

function expensiveTask(num){
  console.log("inside Expensive Task");
  for(let i=0;i<100000000; i++){};
  return num*2;
}

function handleClick(){
  setCount(count+1);
}

function handleDecClick(){
  setCount(count-1);
  
}

// useMemo hook expensive(computational ) task ko prevent krta h 
// it store recently use input value 
// 2 thing is important 
// 1->  expensiveCalculation(input) -> A function that performs the expensive computation
// 2->  [dependencies] -> jiski value pr function depends krta h .
const doublevalue = useMemo(() => expensiveTask(input), [input]);



  return (
    <>
     <div>
      <button onClick={handleClick}>Increment</button>
       <p>count: {count}</p>
       <br />
   

     </div>
     <div>
      <button onClick={handleDecClick}>
        Decrement
        </button>
       
       <br />
     </div>

<input type="number" placeholder='enter number'
value ={input}
onChange={ (e) => setInput(e.target.value)} />
{/* e is the event object  */}

<div>
  <button>
    Double {doublevalue}
  </button> 
</div>
    </>
  )
}

export default App

import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,reset,incrementByAmount } from './features/counter/counterSlice'
import { useState } from 'react';

function App() {

const [amount,setAmount] = useState(0)

  // use useSelector hook for fetch the value in state 
const count = useSelector((state) =>state.counter.value);

//The useDispatch() hook in React is used to dispatch actions to the Redux store
const dispatch = useDispatch();

function handleIncrementClick(){
 dispatch(increment());  // store ke pass jake check krega 
}

function handleDecrementClick(){

  dispatch(decrement());  // store ke pass jake check krega 
}

function handleresetClick(){

  dispatch(reset());
}

function handleIncAmountClick(){
   dispatch(incrementByAmount(amount))
}

  return (
    <>
      <div className='container'>
        <button onClick={handleIncrementClick}>+</button>
      <p>Count :{count} </p>
      <button onClick={handleDecrementClick}>-</button>
      <br />
      <button onClick={handleresetClick}>reset </button>
     
     <br />
     <br /> 
     
     <input type="Number" value={amount} 
     placeholder='Enter the number'
     onChange={(e) =>setAmount(e.target.value)}/>
     </div>
    
     <br />
      <button onClick={handleIncAmountClick}>Inc by Amount </button>
     

    </>
  )
}

export default App

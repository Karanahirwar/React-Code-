import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(1)

  // first -> side-effect(logic) function 
  // which action we want to perform 
  // eg -> fetch data from db , console.log,alert 

  // second -> clean-up function 
  // it clean the function like eventListner remove 
  // save the memory leak 

  // third-> comma separted dependency list 
  // entity mention krte h yha pr uske based pr 
  // useeffect function run krta h 

// useEffect(() => {
//   first

//   return () => {
//     second
//   }
// }, [third])

 
// variation :1 
// run on every render 

// useEffect(() => {
//  alert("this run on every render(update)") 
// //  alert("are you under 18 for this content")
// } )

// variation :2 
// runs on only first render 

// useEffect(() => {
//   // ye bs starting me alert dega uske bad nhi dega 
//   // chahe jitni bar update kro 
//  alert('I will run on only 1st render(update)');
// }, [])


// variation :3 
// I will run every time when count updated 
// jb jb count update hoge tb tb ye chalega 

// useEffect(() => {
//   alert("I will run every time when count updated" );
// }, [count])

// variation:4 
// mutiple dependencies

// it work in multiple dependencies 
// like count and total kaise do me se koi bhi 
// value change / render krte h to it work 

  //  useEffect( ()=>{
  //  alert("I will run every time when count and total are updated ")
  //  },[count,total])

  // variation:5 
  //  is bar let add and cleanup function 
  // update/ render hone se phle unmount (clean)
  // ho jayega purana function (count ki value)

useEffect(() => {
  alert("Count is updated")

  return () => {
    alert("count is unmounted from UI");
  }
}, [count])



function HandleCount(){
  setCount(count+1);
}

function HandleTotal() {
  setTotal(total+1)
}

  return (
    <>
      <div>
  <button onClick={HandleCount}>
 update Count
  </button>
  <br/>
 <p>Count is:{count}</p> 

 <br/>


 <button onClick={HandleTotal}>
 update Total
  </button> 
  <br/>
 <p>Total   is:{total}</p> 
      </div>
    </>
  )
}

export default App

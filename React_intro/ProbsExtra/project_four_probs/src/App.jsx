import './App.css'
import Button from './components/Button'
// import Card from './components/Card'
import {useState} from 'react'

function App() {
  const [count,setCount] = useState(0);

  function handleclick(){
    setCount(count+1);
  } 
  return (
  
      <div>
      <Button handleClick={handleclick} text="click me">
      <h5>{count}</h5>
      </Button>
     {/* <Card name='karan'>
       <h1>We are studing  probs topic </h1>
       <p>card is called components</p>
       <p> inside the components is called children </p>
       <p>It may be text element nested element</p>
       
</Card> */}

</div>
  )
}

export default App

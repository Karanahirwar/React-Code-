// import React from 'react'

import { useNavigate } from "react-router-dom"

const Home = () => {
const navigate = useNavigate();
  
function Handleclick(){
     navigate('/about');
}

  return (
    <div>
      <h1> Home Page </h1>
      <button onClick={Handleclick}>
        Move to About page
      </button>
    </div>
  )
}

export default Home

// import React from 'react'
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  
  function Handleclick(){
       navigate('/dashboard');
  }

  return (
    <div>
      About page 
      <button onClick={Handleclick}>
        Move to Dashboard page
      </button>
    </div>
  )
}

export default About

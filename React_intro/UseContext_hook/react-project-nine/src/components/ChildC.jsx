// import React, { useContext } from 'react';
import { UserContext } from '../App';
import { useContext } from 'react';
const ChildC = () => {
  const user = useContext(UserContext); // Consuming the context value

  return (
    <div>
      <h1> Name: {user.name}</h1> 
      <h2>age is :{user.age}</h2> 
      


    </div>
  );
};

export default ChildC;

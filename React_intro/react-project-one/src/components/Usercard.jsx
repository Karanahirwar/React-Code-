import React from 'react';
// import karanpic from '../assets/karanpic.jpeg';
import './Usercard.css';


const UserCard = (props) => {
  return (
    <div className='user-container'>
      <p id='user-name'>{props.name} </p>
      <img id='user-img' src={props.image} alt={props.name} />
      <p id='user-desc'> Description of {props.desc} </p>
    </div>
  );
}

export default UserCard;

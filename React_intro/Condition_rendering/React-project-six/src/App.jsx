import { useState } from 'react';
import LogoutBtn from './components/logoutBtn';
import LoginBtn from './components/loginBtn';
import './App.css';



function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

//  if(! isLoggedIn) {
//   return (
//     <LoginBtn/>
//   )
  
//  }

 if (!isLoggedIn) {
  return (
    <LoginBtn />
  )
}
  return (
    <div>
      <h1>welcome to react condition rending topic</h1>
      {
        <div>
          {
            isLoggedIn && <LogoutBtn/>
          }
        </div>
      }
    </div>
  )
  //   return (
  //    <div>
  //     {isLoggedIn ? <LogoutBtn/>: <LoginBtn/> }
  // </div>    
  //   )

 
  // if (isLoggedIn) {
  //   return (
  //     <LogoutBtn />
  //   );
  // } else {
  //   return (
  //     <LoginBtn />
  //   );
  // }

}

export default App;
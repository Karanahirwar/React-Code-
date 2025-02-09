import { createContext } from 'react';
import './App.css';
import ChildA from './components/childA';


// Step 1: Create the context
const UserContext = createContext();

// Step 2: Wrap children inside the provider
// step 3: pass the value 
// step 4 : consumer ke ander jake consume kr lo 

function App() {
  const user = { name: "John", age: 30 };
  return (
     <UserContext.Provider value={user}>
      <ChildA />
    </UserContext.Provider>
  );
}

export default App;
export { UserContext };

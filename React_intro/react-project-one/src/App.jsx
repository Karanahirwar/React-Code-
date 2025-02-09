import UserCard from "./components/Usercard";
import karanpic from "./assets/karanpic.jpeg";
import  baba from "./assets/baba.jpg";
import  apj from "./assets/apj.webp";


function App() {

  return (
    <div  className="container" >
    <UserCard name="karan Ahirwar " desc="karan developer" image={karanpic}/> 
    
    <UserCard name="Dr.APJ " desc="president of India " image={apj} />
  <UserCard name="Baba Saheb" desc="father of indian contitution"  image={baba}/>
    </div>  
  )
}

export default App

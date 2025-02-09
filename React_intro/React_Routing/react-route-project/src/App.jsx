// import { useState } from 'react'
import {createBrowserRouter,
  RouterProvider} from "react-router-dom"
import './App.css'
import About from './components/About';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ParamsCompo from "./components/ParamsCompo";
import MockTest from "./components/MockTest";
import Cources from "./components/Cources";
import Reports from "./components/Reports"
import NotFound from "./components/NotFound";
const router = createBrowserRouter (
[
  {path:"/",
    element:
    <div>
      <Navbar/>
     <Home/> 
     </div>
  },

  {
    path:"/about",
    element:
    <div>
      <Navbar/>
      <About/>
     </div>
    
  },
  {
    path:"/dashboard",
    element:
    <div>
      <Navbar/>
     <Dashboard/>
     </div>,
     children :[
      {
        path:'cources',
        element:<Cources/>
      },
      {
        path:'mock-tests', 
        element:<MockTest/>
      },
      {
        path:'reports',
        element:<Reports/>
      }
     ]
  },
  {
    path:'/student/:id',
    element:
    <div>
      <Navbar/>
      <ParamsCompo/>
    </div>
  },
  {
path:'*',
element:<NotFound/>
  },

]
);

function App() {

  return (
    <>
      <div>
      <RouterProvider router={router} />
       
      </div>
    </>
  )
}

export default App 

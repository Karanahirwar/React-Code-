// import React from 'react'

import { useContext } from "react"
import { ThemeContext } from "../App"

const ChildC = () => {

    const {theme,setTheme} = useContext(ThemeContext);
  
  function themetoggle(){
    if(theme ==='light')
        setTheme('dark')
    else
    setTheme('light')
  }
function ask(){
    alert('do you want change background color');
}
    return (
    <button  onMouseUp={ask} onClick={themetoggle} id='themebtn'>
        Change Theme
    </button>
  )
}

export default ChildC

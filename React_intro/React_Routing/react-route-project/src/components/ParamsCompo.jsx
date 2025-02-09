// import React from 'react'
import { useParams } from 'react-router-dom'

const ParamsCompo = () => {
    const {id} = useParams();
  return (
    <div>
      Params is  {id};
    </div>
  )   
}

export default ParamsCompo

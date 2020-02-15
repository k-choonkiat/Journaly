import React from 'react';
import {Link} from 'react-router-dom'

export default function Counselor(){
  return(
    <div>
      <h1>Hello, Counselor</h1> 
      <Link to="/">Home</Link>
    </div>
  )
}
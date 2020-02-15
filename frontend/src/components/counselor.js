import React from 'react';
import {Link} from 'react-router-dom'
import Nav from './nav'

export default function Counselor(){
  return(
    <div>
      <Nav/>
      <h1>Hello, Counselor</h1> 
      <Link to="/">Home</Link>

    </div>
  )
}
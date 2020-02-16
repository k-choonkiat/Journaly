import React from 'react';
import {Link} from 'react-router-dom'
<<<<<<< HEAD
import c from '../images/c.jpeg'
import '../styling/counselor.css'
import '../index.css'

export default function Counselor(){
  return(
    <body>
      <div style={{backgroundImage: '../images/c.jpeg'}}>
        <h1>Hello, Counselor</h1> 
        {/* <img src= {c} alt= "adobe" className ="image" /> */}
        <Link to="/">Home</Link> 
      </div>
    </body>
=======
import Nav from './nav'

export default function Counselor(){
  return(
    <div>
      <Nav/>
      <h1>Hello, Counselor</h1> 
      <Link to="/">Home</Link>

    </div>
>>>>>>> master
  )
}
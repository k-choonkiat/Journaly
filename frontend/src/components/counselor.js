import React from 'react';
import {Link} from 'react-router-dom'
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
  )
}
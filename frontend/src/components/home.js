import React from 'react';
<<<<<<< HEAD
import Nav from './navbar';

export default function Home(){
  return(

    <div>
      <Nav />
      <h1>Login/Register</h1> 
    </div>
  )
// on, on change - text form click java script
}
=======
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './nav.js'



export default class Home extends React.Component{
  render(){
    return(
    <div>
      <Nav/>
      <h1>Login/Register</h1> 
    </div>
  )
}}
>>>>>>> master

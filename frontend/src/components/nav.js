import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';


export default class Nav extends React.Component{
  render(){
    return(
    <div>
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="Home">Home</Navbar.Brand>
  <Navbar.Brand href="Counselor">Counselling Services</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Form inline>
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    </div>
  )
}}
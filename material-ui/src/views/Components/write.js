import React, {Component} from 'react';
import { db } from './firebase.js';

export default class Create extends Component{
  constructor(){
    super();
    this.ref = db.collection('users');
    this.state = {
      status: '',
      proud: '',
      rating: 0
    };
  }

  onChangeStatus = (event) => {
    this.setState({status: event.target.value});
  }

  onChangeProud = (event) => {
    this.setState({proud: event.target.value});
  }
  
  onChangeRate = (event) => {
    this.setState({rating: event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault();

    const {status, proud, rating} = this.state;

    this.ref.add({status, proud, rating}).then((docRef) => {
      this.setState({status: '', proud: '', rating: 0});
      console.log("success!");
      this.props.history.push("/journal-log"); 
    })
    .catch((error)=> {console.error("ERROR adding document: ", error);
  });
  }

  render(){
    const {status, proud} = this.state;
    return(
      <div>
          <h3>Write your heart out</h3>
          <form onSubmit={this.onSubmit}>
            <label for="status">Status: </label>
            <input type= "text" name= "status" value= {status} onChange= {this.onChangeStatus} placeholder= "Status" />
            
            <label for="proud">Achievement: </label>
            <input type= "text" name= "proud" value= {proud} onChange= {this.onChangeProud} placeholder= "Achievement" />

            <button type= "submit">Submit</button>
          </form>
          <label for= "rate">Rating:</label>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
      </div>
      );
  }
}
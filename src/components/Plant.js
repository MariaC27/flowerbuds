
import React, { Component } from 'react';
import './Plant.css';

class Plant extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
  
   
    render() {
      
  
      return (
        <div className='plantStyle'>
          <p>Plant: {this.props.title}</p>
        </div>
      )
    }
  }
  
  export default Plant;
  

import React, { Component } from 'react';

class Plant extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
  
   
    render() {
      
  
      return (
        <div className='plantStyle'>
          <p>{this.props.title}</p>
        </div>
      )
    }
  }
  
  export default Plant;
  
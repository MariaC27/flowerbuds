
import React, { Component } from 'react';
import './Plant.css';
import flower0 from './flowers/type0blue.png';
import flower1 from './flowers/type1blue.png';
import flower2 from './flowers/type2blue.png';

class Plant extends Component {
    constructor(props) {
      super(props);
      this.state = {
        //-1 is uncreated state, have options 1,2,3
        name:" ",
        growthState:-1, //
        points:0,
        color:-1, 
        plantType:-1.

      };
    }
    


    
    render() {
      if(this.plantType=0){
        return (
          <div className='plantType'>
            <p>Plant: {this.props.title}</p>
            <img src={flower0}/>
            <button className="GrowButton" onClick={this.growPlants}> Water!</button>
          </div>
        )
      }
      else if(this.plantType=1){
        return (
          <div className='plantType'>
            <p>Plant: {this.props.title}</p>
            <img src={flower1}/>
            <button className="GrowButton" onClick={this.growPlants}> Water!</button>
          </div>
        )
      }
      else{
        return (
          <div className='plantType'>
            <p>Plant: {this.props.title}</p>
            <img src={flower2}/>
            <button className="GrowButton" onClick={this.growPlants}> Water!</button>
          </div>
        )
      }
      
    }
  }
  
  export default Plant;
  
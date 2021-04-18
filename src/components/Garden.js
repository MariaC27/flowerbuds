import React, { Component } from 'react';
import Firebase from '../firebase/index';
import Plant from './Plant';
import './Plant.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


class Garden extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPlants: [],
      title: '',
      id: 0,
      
    }
  }
  newTitleFunction = (event) => {
    this.setState({ title: event.target.value });
  }
  

  savePlant = () => { 
    Firebase.db.collection('garden').add({
      title: this.state.title,
      id: this.state.id
    }).then(ref => {
      this.setState({
        id: this.state.id + 1,
      });
      }).catch(error => {
    console.log(error.message)
    });
  }

  fetchPlants = () => {
    const plantList = [];
    Firebase.db.collection('garden').get()
      .then(querySnapshot => {
        querySnapshot.forEach( doc => {
          console.log(doc.data());
          plantList.push(doc.data());
        })
      }).then(() => {
        this.setState({
          allPlants: plantList
        });
        console.log(this.state.allPlants);
      })
      .catch(err => {
        console.log(err.message)
      })
  }

 

 
  render() {
    const posts = this.state.allPlants;
    const allPosts = posts.map((todo) => {
        return (
          <Plant 
            title={todo.title}
            id={todo.id}
          />
        );
      }
    );
    return (
      <div>
        <p className="GardenTitle"> My Garden</p>
       
        <p className="GardenText"></p>

        <input className="Input" type="text" placeholder="Plant New Bud"value={this.state.title} onChange={this.newTitleFunction} />


        <DropdownButton id="dropdown-item-button" title={this.state.ButtonDisplay}>
      <Dropdown.Item as="button" onClick = {()=>this.chooseFlower("1")}>1</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseFlower("2")}>2</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseFlower("3")}>3</Dropdown.Item>
      
      </DropdownButton>

        <button className="SaveButton" onClick={this.savePlant}>Save Plant</button>

          <button className="UpdateButton" onClick={this.fetchPlants}> Show Plants!</button>
    
          <div>
          {allPosts}
          </div>
         
       
      </div>
    );
  }
}

export default Garden;
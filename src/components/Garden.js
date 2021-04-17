import React, { Component } from 'react';
import Firebase from '../firebase/index';
import Plant from './Plant';
import './Plant.css';


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
        <p className="GardenTitle">_____'s Garden</p>
       
        <p className="GardenText">Add something!</p>

        <p>Enter Title:</p>
        <input className="Input" type="text" value={this.state.title} onChange={this.newTitleFunction} />

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
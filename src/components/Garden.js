import React, { Component } from 'react';
import Firebase from '../firestore/index';
import Plant from './Plant';
import './App.css';

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
          <Plant className="plantPost"
            title={todo.title}
            id={todo.id}
          />
        );
      }
    );
    return (
      <div>
        <p className="boardTitle"> Garden</p>
       
        <p className="boardText">Add something!</p>

        <p>Enter Title:</p>
        <input className="boardInput" type="text" value={this.state.title} onChange={this.newTitleFunction} />

        <button className="boardButton" onClick={this.saveNewToDo}>Save Plant</button>

        
          <button className="boardButton" onClick={this.fetchToDos}> Show Plants!</button>
          <div>
          {allPosts}
          </div>
         
       
      </div>
    );
  }
}

export default Garden;
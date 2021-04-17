import {Component} from 'react';
import './App.css';
import Garden from './components/Garden';

class App extends Component{
  constructor(props){
    super(props);
  }

  render (){
  return (
    <div className="App">
      <header className="App-header">
       <p>FlowerBuds</p>
       <Garden></Garden>
      </header>
    </div>
  );
}
}

export default App;

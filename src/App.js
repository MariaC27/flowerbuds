import {Component} from 'react';
import './App.css';
import Plant from './components/Plant';

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

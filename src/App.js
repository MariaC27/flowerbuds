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
      <header className="Title">FlowerBuds</header>
      <body className="Body">
      <Garden></Garden>
      </body>
    

    </div>
  );
}
}

export default App;

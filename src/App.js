import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import Items from "./Items";




class App extends Component{
  render() {
    return(
        <div className="App">

          <h3>React-Redux Store</h3>
          <p>Welcome to React Store</p>
          <Items/>
        </div>
    )
  }
}

export default App;

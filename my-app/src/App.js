import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";


class App extends Component{
  render(){
    return(
      <div>
        <NavBar />
        <ItemListContainer />
      </div>
      
    );
  }
}

export default App;

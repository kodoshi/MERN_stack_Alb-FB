import React, {Component} from 'react';
import MainRouter from "./MainRouter";
import {BrowserRouter} from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
      
      );
  }
}
export default App;

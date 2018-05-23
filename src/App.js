import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="banner"> Please Enter a Number </h1>
    <div className="form-banner">
      <form>
      <input type="text" placeholder="Search.."/>
      <button>Linear Search</button>
      <button>Binary Search</button>
        </form>

      </div> 
      </div>
    );
  }
}

export default App;

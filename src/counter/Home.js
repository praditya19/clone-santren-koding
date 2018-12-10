import React, { Component } from 'react';
import Header from '../Components/Header';
import Jumbotron from '../Components/Jumbotron';
import Cards from '../Components/Card.js';
import '../Components/Card.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Jumbotron />
        <div>
          <center><h1>Daftar Kajian Koding Rutin</h1></center>
        </div><br></br>
        <Cards />
      </div>
    );
  }
}

export default Home
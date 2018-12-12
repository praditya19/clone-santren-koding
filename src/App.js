import React, { Component } from 'react';
import Home from './counter/Home';
import Kajian from './Page/Kajian';
import Kitab from './Page/Kitab';
import Mondok from './Page/Mondok';
import Navbar from './/Components/Navbar';
class App extends Component {
  state = {
    Page: 'Home'
  };

  changePage = params => {
    this.setState({
      Page: params
    });
  };

  render() {
    const { Page } = this.state;

    if (Page === 'Home') {
      return (
        <div>
          <Navbar layout={this.changePage} />
          <Home />
        </div>
      );
    } else if (Page === 'Kajian') {
      return (
        <div>
          <Navbar layout={this.changePage} />
          <Kajian />
        </div>
      );
    } else if (Page === 'Mondok') {
      return (
        <div>
          <Navbar layout={this.changePage} />
          <Mondok />
        </div>
      );
    } else if (Page === 'Kitab') {
      return (
        <div>
          <Navbar layout={this.changePage} />
          <Kitab />
        </div>
      );
    } else {
      return <h1>Ini Halaman {Page}</h1>;
    }
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Airport from './routes/airport/Airport';

import './App.css';
import logoImage from './logo.svg'

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage:1
    };
  }

  render() {
      return (
        <Router>
            <div>
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/airport">Airport</Link></li>
              </ul>

                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/airport" component={Airport} />
            </div>
        </Router>
    );
  }
  
  /*
  OVAKO SE KORISTI U TEMPLATE
  <li onClick={() => this.changePage(1)}>First page</li>

  changePage(page) {
    this.setState({
      currentPage: page
    });
  }*/
}

class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home</h2>
            </div>
        );
    }
}

class About extends Component {
    render() {
        return (
            <div>
                <h2>About</h2>
                <div>No shit! Third page! <img src={logoImage} alt="Simple react logo" /></div>
            </div>
        );
    }
}

export default App;

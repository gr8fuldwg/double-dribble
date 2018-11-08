import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className=" navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Dribble</a>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Shots <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Designers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">Teams</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">Community</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">Jobs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">Hiring</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                <i className="fa fa-ellipsis-h" aria-hiden="true"></i>
                  </a>
              </li>
            </ul>
            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link " href="#">Sign Up</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">Sign In</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              
            </form>

          </nav>
          <section>Call to action</section>
          <section>More info</section>
        </header>
      </div>
    );
  }
}

export default App;

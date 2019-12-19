import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/nav.css';

class Nav extends Component{
  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
        <a className="navbar-brand" href="/">
          <img src="images/logosmall.png" height="30" alt="jaa logo"/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Art">Art Archive</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#languages">Languages</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Nav;

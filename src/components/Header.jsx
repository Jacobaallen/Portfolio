import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/header.css';

class Header extends Component{
  render () {
    return (
      <div className="navbar">
      <div className="Links">
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/social-media">Social Media</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </div>
  </div>
    )
  }
}

export default Header;

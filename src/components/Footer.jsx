import React, { Component } from 'react';
import '../styles/footer.css';

class Footer extends Component{
  render () {
    return (
      <div className="footer">
        <div className="social-media">
          <div className="github mb-2">
            <img src="images/github-logo.png" alt="github" height="100" width="100"/>
          </div>
          <div className="linkedin mb-2">
            <img src="images/linkin-cicle.png" alt="linkedin" height="100" width="100"/>
          </div>
        </div>
        <div className="copyright">
          <p>All Rights Reserved Copyright 2019 Jacob A. Allen</p>
        </div>
      </div>
    )
  }
}

export default Footer;

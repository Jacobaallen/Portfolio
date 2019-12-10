import React from 'react';
import '../styles/art.css';


class Art extends React.Component {
 render() {
   return (
     <div className="coming-soon">
      <h1>Coming Soon</h1>
      <a className="nav-link" href="/Art-Archive">Accept</a>
      <a className="nav-link" href="/">Ignore</a>
    </div>
  )
 }
}

export default Art;

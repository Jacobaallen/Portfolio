import React from 'react';
import '../styles/warning.css';


class Art extends React.Component {
 render() {
   return (
     <div className="warning">
       <h1>Warning</h1>
      <p>Federal Law Provides severe civil and criminal penalties for the unauthorized reproduction, distribution or exhibition of copyrighted Jacob A. Allen artwork in any form or in a forum now or in the future is NOT permissible without my expressed written consent.
         Any act to promote or gain profit in any manner (e.g. either monetarily or socially) from the use of Jacob A. Allen work is a violation of my privacy and subject to legal action. 
         Penalties of Copyright Infringement: By reproducing, republishing or redistributing the work of a copyright holder without permission, you may be violating or infringing on his or her rights under the Copyright Act.
         Criminal copyright infringement is investigated by the FBI and may constitute a felony with a maximum penalty of up to five years in prison and or a $500,000 USD Fine. By agreeing you have read and understood what can happen to you.</p>
      <a className="nav-link" href="/Art-Archive">Accept</a>
      <a className="nav-link" href="/">Ignore</a>
    </div>
  )
 }
}

export default Art;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Socialmedia from './components/Socialmedia';
import Contact from './components/Contact';

class App extends React.Component {
  render () {
  return (
    <Router>
      <Header/>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/Socialmedia" component={Socialmedia} />
          <Route path="/contact" component={Contact} />
         <Footer/>
       </Router>
    )
  }
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About';
import home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import portfolio from './components/Portfolio'
import resume from './components/Resume';

class App extends React.Component {
  render () {
  return (
    <Router>
      <div>
        <Header/>
          <Route exact path="/" component={Home} />
				  <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/social-media" component={Social-Media} />
          <Route path="/contact" component={Contact} />
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App;

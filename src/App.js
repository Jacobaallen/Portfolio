import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import about from './components/About';
import home from './components/Home';
import header from './components/Header';
import footer from './components/Footer';
import portfolio from './components/Portfolio'
import resume from './components/Resume';

class App extends React.Component {
  render () {
  return (
    <Router>
      <Header/>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/social-media" component={Social-Media} />
          <Route path="/contact" component={Contact} />
         <Footer/>
       </Router>
    )
  }
}

export default App;

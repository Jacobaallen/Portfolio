import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
  render () {
  return (
    <Router>
      <Header/>
          <Route exact path="/" component={Home} />
         <Footer/>
       </Router>
    )
  }
}

export default App;

import React from 'react';
import HomeCarousel from './HomeCarousel';
import '../styles/home.css';

class Home extends React.Component {
 render() {
   return (
   <div className="master">
    <header/>
      <div className="top">
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
    <div className="container">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto smooth-scroll">
          <li className="nav-item">
            <a className="nav-link" href="#home">Home
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about" data-offset="90">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#resume" data-offset="90">Resume</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#portfolio" data-offset="90">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact" data-offset="30">Contact</a>
          </li>
        </ul>

        <ul className="navbar-nav nav-flex-icons">
          <li className="nav-item">
            <a className="nav-link">
              <i className="fab fa-linkedin-f light-green-text-2"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              <i className="fab fa-Github light-green-text-2"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              <i className="fab fa-instagram light-green-text-2"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

      <div className="hero-image" id="home">
        <div className="hero-text" >
          <h1>Hi, I'm Jacob A. Allen</h1>
          <p>And I'm a Full Stack Web Developer</p>
        </div>
      </div>

        <div className="about" id="about">
          <h1 className="about">About</h1>
        </div>
        <div className="aboutColumn">
      <img src="images/profile.jpg" alt="aboutPic"/>
      </div>
    <div className="aboutColumn">
      <p id="about">
        I was born and raised in West Palm Beach, Florida. I am a recent graduate of Wyncode where I earned my certification as a Full Stack Web Developer. Before Wyncode
        I studied studio art at Florida Atlantic University. I took post graduate courses in web design and publication design at Palm Beach State College while working
        as a substitute teacher for the Palm Beach County School District. I decided to transform my art background into a technology based career and attended Wyncode.
        This came about from my interest in technology and curiosity about how the web works. Learning how to create and invent the technology myself was the next logical step so I learned to code. Now I'm looking for a job where I can show my skill and improve with the company that hires me.
        Languages:
        HTML5, CSS3, JavaScript, Python, JQuery, Ruby
        Libraries:
        JQuery, React.JS, AngularJS, Rails, React on Rails
      </p>
    </div>

    <div className="bgimage-2">
      <div className="What-I-Do">
        <h1>What I Do</h1>
      </div>
        <img src="images/Web-develper-logo-2.png" alt="WebDevelopment1"/>
        <img src="images/graphicdesignlogohomepage.png" alt="Design"/>
        <img src="images/artlogo.png" alt="artlogo"/>
   </div>

   <div className="masterResume" id="resume">
     <div className="resume">
       <h1>Resume</h1>
     </div>
     <div className="Education">
       <p>Education</p>
     </div>
     <div className="Education">
       <img src="assets/images/education.png" alt="educationinfo"/>
     </div>
     <div className="Experience">
       <img src="assets/images/experience.png" alt="experienceinfo"/>
     </div>

     <div className="portfolio" id="portfolio">
     <div className = "HomeCarousel">
         <HomeCarousel/>
       </div>
     </div>
   </div>

   <div className="form" id="contact">
     <form action="mailto:jacob@jacobaallen.com" method="post" encType="text/plain">
        Name:<br/>
        <input type="text" name="name"/><br/>
        E-mail:<br/>
        <input type="text" name="mail"/><br/>
        Comment:<br/>
      <input type="text" name="comment" size="50"/><br/><br/>
        <input type="submit" value="Send"/>
        <input type="reset" value="Reset"/>
      </form>
    </div>

   <a href="#top">Top</a>
 </div>

   )
 }
}
export default Home;

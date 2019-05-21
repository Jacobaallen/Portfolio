import React from 'react';
import HomeCarousel from './HomeCarousel';
import '../styles/home.css';

class Home extends React.Component {
 render() {
   return (
   <div className="master">
    <header className="header"/>
      <div className="top">
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
        <a className="navbar-brand" href="#home">
          <img src="images/logosmall.png" height="30" alt="jaa logo"/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#resume">Resume</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>


      <div className="hero-image" id="home">
        <div className="hero-text" >
          <h1>Hi, I'm Jacob A. Allen</h1>
          <p>And I'm a Full Stack Web Developer</p>
        </div>
      </div>

        <div className="about" id="about">
          <h1>About</h1>
        </div>
    <div className="about-master">
    <div className="about-text">
      <img src="images/IMG_0776-2-small.jpg" alt="aboutPic" width="300" height="375" />
      <p>
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
  </div>

  <div className="bgimage-2">
    <div className="transbox">
      <div className="What-I-Do">
        <h1>What I Do</h1>
      </div>
      <div className="icons-1">
        <img src="images/Web-develper-logo-2.png" alt="WebDevelopment1" height="150" />
        <p>Develop</p>
      </div>
      <div className="icons-2">
        <img src="images/artisticon.png" alt="artlogo"/>
        <p>Design</p>
      </div>
      <div className="icons-3">
        <img src="images/graphicdesignlogohomepage.png" alt="innovation"/>
        <p>Innovation</p>
      </div>
    </div>
   </div>

   <div className="resume-text" id="resume">
     <h1>Resume</h1>
   </div>
   <div className="masterResume">
     <div className="Education-image">
       <img src="images/education.png" alt="educationinfo" height="300" width="500"/>
     </div>
     <div className="Experience-image">
       <img src="images/experience.png" alt="experienceinfo"height="425" width="500"/>
     </div>
    </div>

    <div className="projects-text" id="projects">
      <h1>Projects</h1>
    </div>
     <div className="portfolio" id="portfolio">
     <div className = "HomeCarousel">
         <HomeCarousel/>
       </div>
     </div>

     <div className="contact-text" id="contact">
       <h1>Contact</h1>
     </div>

  <div className="contact-master">
   <div className="form">
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

    <div className="contact-icons">
      <div className="icons-4">
        <img src="images/email-icon.png" alt="email" height="100" />
        <p>jacob@jacobaallen.com</p>
      </div>
      <div className="icons-5">
        <img src="images/phone-icon-circle.png" alt="phone" hight="100" width="100"/>
        <p>(561) 315-5460</p>
      </div>
      <div className="github">
        <img src="images/github-logo.png" alt="github" hight="100" width="100"/>
      </div>
      <div className="linkedin">
        <img src="images/linkin-cicle.png" alt="linkedin" hight="100" width="100"/>
      </div>
    </div>
  </div>

    <div className="top-button">
      <a href="#top">Back to Top</a>
   </div>
</div>

   )
 }
}
export default Home;

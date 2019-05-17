import React from 'react';
import HomeCarousel from './HomeCarousel';
import '../styles/home.css';

class Home extends React.Component {
 render() {
   return (
   <div className="master">
    <header/>
      <div className="top">
        <div className="bar" id="myNavbar">
          <a className="bar-item button hover-black hide-medium hide-large right" href="javascript:void(0);" onClick="toggleFunction()" title="Toggle Navigation Menu">
            <i className="fa fa-bars"></i>
          </a>
          <a href="#home" className="bar-item button">HOME</a>
          <a href="#about" className="bar-item button hide-small"><i className="fa fa-user"></i> ABOUT</a>
          <a href="#portfolio" className="bar-item button hide-small"><i className="fa fa-th"></i> PORTFOLIO</a>
          <a href="#contact" className="bar-item button hide-small"><i className="fa fa-envelope"></i> CONTACT</a>
          <a href="#" className="bar-item button hide-small right hover-red">
            <i className="fa fa-search"></i>
          </a>
        </div>

        <div id="navDemo" className="bar-block white hide hide-large hide-medium">
          <a href="#about" className="bar-item button" onClick="toggleFunction()">ABOUT</a>
          <a href="#portfolio" className="bar-item button" onClick="toggleFunction()">PORTFOLIO</a>
          <a href="#contact" className="bar-item button" onClick="toggleFunction()">CONTACT</a>
        </div>
      </div>

      <div className="hero-image">
        <div className="hero-text">
          <h1>Hi, I'm Jacob A. Allen</h1>
          <p>And I'm a Full Stack Web Developer</p>
        </div>
      </div>


        <div>
          <h1 className="about">About</h1>
        </div>
        <div className="aboutColumn">
      <img src="assets/images/profile.jpg" alt="aboutPic"/>
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
      <div className="development">
        <img src="assets/images/Web-develper-logo-2.png" alt="WebDevelopment1"/>
      </div>
      <div className="responsive">
        <img src="assets/images/graphicdesignlogohomepage.png" alt="Design"/>
      </div>
      <div className="design">
        <img src="assets/images/artlogo.png" alt="artlogo"/>
      </div>
   </div>

   <div className="masterResume">
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

     <div id="portfolio">
     <div className = "HomeCarousel">
         <HomeCarousel/>
       </div>
     </div>
   </div>
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

   <a href="#top">Top</a>
 </div>

   )
 }
}
export default Home;

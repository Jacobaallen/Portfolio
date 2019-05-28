import React from 'react';
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
              <a className="nav-link" href="#portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>


      <div className="hero-image" id="home">
        <div className="hero-text-master">
          <div className="hero-text" >
            <p>Hi, I'm Jacob A. Allen</p>
          </div>
          <div className="hero-text-2">
            <div className="typewriter-hero-text-2"> And I'm a Full Stack Web Developer.</div>
          </div>
        </div>
      </div>

        <div className="about" id="about"/>
    <div className="about-master">
    <div className="about-text">
      <div className="aboutPic">
        <img src="images/IMG_0776-2-small.jpg" alt="aboutPic" width="300" height="375" />
      </div>
      <div className="about-title">
        <h1>About</h1>
      </div>
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
      <div className="button-master">
          <div className="resume-download">
              <a href='my-resume-8.pdf' download>Download Resume</a>
          </div>
        <div className="contact-button">
            <a className="contact-button" href="#contact">Contact Me</a>
        </div>
      </div>
    </div>
  </div>

  <div className="Languages-text">
    <h1>Languages</h1>
  </div>
  <div className="Languages">
      <img src="images/html-logo.png" alt="htmlLogo"  height="200"/>
      <img src="images/css-logo.png" alt="cssLogo" height="200"/>
      <img src="images/js-logo.png" alt="jsLogo" height="200"/>
      <img src="images/Ruby-logo.png" alt="rubyLogo" height="200"/>
  </div>

  <div className="bgimage-2" id="portfolio">
    <div className="transbox">
      <div className="portfolio">
        <p>Portfolio</p>
      </div>
    </div>
   </div>

     <div className="projects" id="projects">
        <div className="responsive">
          <div className="gallery">
            <a target="_blank" href="https://beat-blender.herokuapp.com/">
              <img src="images/BeatBleader.png" alt="" width="800" height="400"/>
            </a>
            <div className="desc">BeatBleader uses Geolocation and the Spotify API to conect you with the people around you thought music.</div>
          </div>
        </div>
        <div className="responsive">
          <div className="gallery">
            <a target="_blank" href="images/dishwish.png">
              <img src="images/dishwish.png" alt="dishwish" width="800" height="400"/>
            </a>
            <div className="desc">Dishwish is a recipe finding app. Using the Recipepuppy API.</div>
          </div>
        </div>
        <div className="responsive">
          <div className="gallery">
            <a target="_blank" href="https://github.com/Jacobaallen/Weekend-Game-2">
              <img src="images/game.png" alt="game" width="800" height="400"/>
            </a>
            <div className="desc">Elder Tales is a game made for the Terminal. Based on the anime Log Horizon.</div>
          </div>
        </div>
        <div className="responsive">
          <div className="gallery">
            <a target="_blank" href="https://github.com/Jacobaallen/TourDeEndofSummer">
              <img src="images/Tourdeendofsummer.png" alt="game" width="800" height="400"/>
            </a>
            <div className="desc">Tour De End Of Summer is a information site to find out info on a bike ride.</div>
          </div>
        </div>
      </div>

     <div className="contact-text" id="contact">
       <p>Contact</p>
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
      <div>
        <div className="icons-4">
          <img src="images/email-icon.png" alt="email" height="100" />
          <p>jacob@jacobaallen.com</p>
        </div>
        <div className="icons-5">
          <img src="images/phone-icon-circle.png" alt="phone" height="100" width="100"/>
          <p>(561) 315-5460</p>
        </div>
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

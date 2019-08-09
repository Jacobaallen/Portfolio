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
            <div className="typewriter-hero-text-2"> I'm a Full Stack Web Developer</div>
          </div>
          <div className="hero-text-3">
            <div className="typewriter-hero-text-3"> And I'm looking for a job</div>
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
        I was born and raised in West Palm Beach, Florida. I am a recent graduate of Wyncode where I earned my certification as a Full Stack Web Developer. Before Wyncode,
        I studied studio art at Florida Atlantic University. I took post graduate courses in web design and publication design at Palm Beach State College while working
        as a substitute teacher for the Palm Beach County School District. I decided to transform my art background into a technology based career and attended Wyncode.
        This came about from my interest in technology and curiosity about how the web works. Learning how to create and invent the technology myself was the next logical step so I learned to code. Now I'm looking for a job where I can show my skills and improve with the company that hires me.
      </p>
      <div className="list">
        <p>
          Languages: HTML5, CSS3, JavaScript, PHP, Ruby
        </p>
        <p>
          Libraries: JQuery, React.JS, AngularJS, Rails, React on Rails
        </p>
      </div>
      <div className="button-master">
          <div className="resume-download">
              <a href='my-resume-10.pdf' download>Download Resume</a>
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
    <div className="Languages-images">
      <img src="images/html-logo.png" alt="htmlLogo" className="Languages-images"/>
      <img src="images/css-logo.png" alt="cssLogo" className="Languages-images"/>
      <img src="images/js-logo.png" alt="jsLogo" className="Languages-images"/>
      <img src="images/Ruby-logo.png" alt="rubyLogo" className="Languages-images"/>
      <img src="images/PHP.png" alt="PHPLogo" className="Languages-images" />
    </div>
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
            <a href="https://beat-blender.herokuapp.com/">
              <img src="images/BeatBleader.png" alt="" width="800" height="400"/>
            </a>
            <div className="desc">BeatBleader uses Geolocation and the Spotify API to connect you with other people around you through music.</div>
          </div>
        </div>
        <div className="responsive">
          <div className="gallery">
            <a href="https://github.com/Jacobaallen/Dishwish">
              <img src="images/dishwish.png" alt="dishwish" width="800" height="400"/>
            </a>
            <div className="desc">Dishwish is a recipe finding app that uses the Recipepuppy API.</div>
          </div>
        </div>
        <div className="responsive">
          <div className="gallery">
            <a href="https://github.com/Jacobaallen/Weekend-Game-2">
              <img src="images/game.png" alt="game" width="800" height="400"/>
            </a>
            <div className="desc">Elder Tales is a game made for the terminal based on the anime "Log Horizon".</div>
          </div>
        </div>
      </div>
        <div className="row-2">
        <div className="responsive">
          <div className="gallery">
            <a href="https://tourdeendofsummer.herokuapp.com/index.html">
              <img src="images/Tourdeendofsummer.png" alt="TourDeEndofSummer" width="800" height="400"/>
            </a>
            <div className="desc">Tour De End Of Summer is an event site to find out information about a bike ride.</div>
          </div>
        </div>
        <div className="responsive">
          <div className="gallery">
            <a href="http://www.animefanhelper.com">
              <img src="images/AnimeFanHelper.png" alt="AnimeFanHelper" width="800" height="400"/>
            </a>
            <div className="desc">Anime Fan Helper is a website that helps to find information about anime. Using the Jikan API.</div>
          </div>
        </div>
      </div>
        <div className="row-3">
        <div className="responsive">
          <div className="gallery">
            <a href="http://www.animefanhelper.com/whackaluffy.html">
              <img src="images/whackaluffy0.png" alt="whackaluffy" width="800" height="400"/>
            </a>
            <div className="desc">Based on the anime One Piece and the game Whack-a-mole comes Whack-a-Luffy.</div>
          </div>
        </div>
        <div className="responsive">
          <div className="gallery">
            <a href="http://www.animefanhelper.com/space-invaders.html">
              <img src="images/arcade-game-si.png" alt="Space-invaders" width="800" height="400"/>
            </a>
            <div className="desc">Based on the most game popular ever made.</div>
          </div>
        </div>
        <div className="responsive">
          <div className="gallery">
            <a href="http://www.animefanhelper.com/cowboybebopspacebattle.html">
              <img src="images/arcade-game-CBSB.png" alt="Cowboy-Bebop" width="800" height="400"/>
            </a>
            <div className="desc">Based on the anime Cowboy Bebop comes a first person shooter game.</div>
          </div>
        </div>
      </div>

     <div className="contact-text" id="contact">
       <p>Contact</p>
     </div>

  <div className="contact-master">


    <div className="contact-icons">
        <div className="form">
        <form action="https://formspree.io/jacob@jacobaallen.com" method="POST" class="contact_form" id="contact_form">
          <div className="wrap">
            <p>Name:</p>
            <input name="name" id="name" type="text" placeholder="Your Name"/>
          </div>
          <div className="wrap">
            <p>Email:</p>
            <input name="_replyto" id="email" type="text" placeholder="Your Email"/>
          </div>
          <div className="wrap">
            <p>Message:</p>
            <textarea name="message" id="message" placeholder="Your Message"></textarea>
          </div>
          <div className="arlo_tm_button">
            <button type="submit">Send</button>
          </div>
        </form>

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

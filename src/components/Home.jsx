import React from 'react';
import '../styles/home.css';
import Languages from './Languages';

class Home extends React.Component {
 render() {
   return (
   <div className="master">
    <header className="header"/>
      <div className="top">
      </div>


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
    <h1>Programming Languages</h1>
  </div>
  <div className="Languages" id="languages">
    <Languages/>
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
           <a href="http://www.animefanhelper.com">
             <img src="images/AnimeFanHelper.png" alt="AnimeFanHelper" width="800" height="400"/>
           </a>
           <div className="desc">Anime Fan Helper is a mulltifunction website that has anime related news stories, anime theme games, and your able to search for any anime you want using the Jikan API. I Created it in 2019 and keep updating it.</div>
         </div>
       </div>
       <div className="responsive">
         <div className="gallery">
           <a href="https://www.southeastrealtygroup.net/">
             <img src="images/SE-website.png" alt="southeast-realty-group" width="800" height="400"/>
           </a>
           <div className="desc"> I created this site in 2019 for the company Southeast Realty Group Inc.</div>
         </div>
       </div>
       <div className="responsive">
         <div className="gallery">
           <a href="https://github.com/Jacobaallen/Ichi.world">
             <img src="images/Untitle-Travel.png" alt="Untitle-Travel" width="800" height="400"/>
           </a>
           <div className="desc">This site current being built. It is a weekend travel app design to help users find things to do on the weekend. I am currently making it in 2019.</div>
         </div>
       </div>
      </div>
      <div className="row-2">
        <div className="responsive">
          <div className="gallery">
            <a href="https://beat-blender.herokuapp.com/">
              <img src="images/BeatBleader.png" alt="" width="800" height="400"/>
            </a>
            <div className="desc">BeatBleader uses Geolocation and the Spotify API to connect you with other people around you through music. It was my teams final project at Wyncode in 2019</div>
          </div>
        </div>
        <div className="responsive">
          <div className="gallery">
            <a href="https://github.com/Jacobaallen/Weekend-Game-2">
              <img src="images/game.png" alt="game" width="800" height="400"/>
            </a>
            <div className="desc">Elder Tales is a game made for the terminal based on the anime "Log Horizon". I created it in 2019.</div>
          </div>
        </div>
        <div className="responsive">
          <div className="gallery">
            <a href="https://github.com/rmbeavin/DishWish">
              <img src="images/dishwish.png" alt="dishwish" width="800" height="400"/>
            </a>
            <div className="desc">Dishwish was a team project made with a team at Wyncode. I was a part of. We created it in 2018.</div>
          </div>
        </div>
      </div>
        <div className="row-3">
        <div className="responsive">
          <div className="gallery">
            <a href="http://www.animefanhelper.com/whackaluffy.html">
              <img src="images/whackaluffy0.png" alt="whackaluffy" width="800" height="400"/>
            </a>
            <div className="desc">Based on the anime One Piece and the game Whack-a-mole comes Whack-a-Luffy. Created in 2019.</div>
          </div>
        </div>
        <div className="responsive">
          <div className="gallery">
            <a href="http://www.animefanhelper.com/space-invaders.html">
              <img src="images/arcade-game-si.png" alt="Space-invaders" width="800" height="400"/>
            </a>
            <div className="desc">Based on the most game popular ever made. Created in 2019.</div>
          </div>
        </div>
        <div className="responsive">
          <div className="gallery">
            <a href="http://www.animefanhelper.com/cowboybebopspacebattle.html">
              <img src="images/arcade-game-CBSB.png" alt="Cowboy-Bebop" width="800" height="400"/>
            </a>
            <div className="desc">Based on the anime Cowboy Bebop comes a first person shooter game. Created in 2019.</div>
          </div>
        </div>
      </div>
      <div className="row-3">
        <div className="responsive">
          <div className="gallery">
            <a href="https://tourdeendofsummer.herokuapp.com/index.html">
              <img src="images/Tourdeendofsummer.png" alt="TourDeEndofSummer" width="800" height="400"/>
            </a>
            <div className="desc">A event sited I create using Adobe Dreamweaver in 2016.</div>
          </div>
        </div>
        <div className="responsive">
          <div className="gallery">
            <a href="http://garyramey.com/student-work/gra2144c-sp2016/jallen/project2/index.html">
              <img src="images/ecommerce-site.png" alt="JaKob" width="800" height="400"/>
            </a>
            <div className="desc">A mock up ecommerce site I created using Adobe Muse in 2016.</div>
          </div>
        </div>
        <div className="responsive">
          <div className="gallery">
            <a href="http://garyramey.com/student-work/gra2144c-sp2016/jallen/project1/index.html">
              <img src="images/event-site.png" alt="event" width="800" height="400"/>
            </a>
            <div className="desc">A mock up event site I created using Adobe Muse in 2016.</div>
          </div>
        </div>
      </div>
      <div className= "Art-Archive">
        <a className="nav-link" href="/Art">Jacob's Art, Art Archives</a>
      </div>


     <div className="contact-text" id="contact">
       <p>Contact</p>
     </div>

  <div className="contact-master">


    <div className="contact-icons">
        <div className="form">
        <form action="https://formspree.io/jacob@jacobaallen.com" method="POST" className="contact_form" id="contact_form">
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
          <p>boat.mon@gmail.com</p>
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

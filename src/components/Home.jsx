import React from 'react';
import HomeCarousel from './HomeCarousel';
import '../styles/home.css';


class Home extends React.Component {
 render() {
   return (
   <div className="master">
    <header/>

        <div>
          <h1 className="About">About</h1>
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
     <div className = "HomeCarousel">
         <HomeCarousel/>
       </div>

   </div>
   <a href="#top">Top</a>
 </div>
   )
 }
}
export default Home;

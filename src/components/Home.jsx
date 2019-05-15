import React from 'react';
import HomeCarousel from './HomeCarousel';


class Home extends React.Component {
 render() {
   return (
   <div className="master">
    <header/>
      <div className = "HomeCarousel">
          <HomeCarousel/>
        </div>
        <div className="about-pic">
      <img src="assets/images/profile.jpg" alt="aboutPic"/>
      </div>
    <div className="about">
      <p id="about">
        I was born and raised in West Palm Beach, Florida. I am a recent graduate of Wyncode where I earned my certification as a Full Stack Web Developer. Before Wyncode
        I studied studio art at Florida Atlantic University. I took post graduate courses in web design and publication design at Palm Beach State College while working
        as a substitute teacher for the Palm Beach County School District. I decided to transform my art background into a technology based career and attended Wyncode.
        This came about from my interest in technology and curiosity about how the web works. Learning how to create and invent the technology myself was the next logical step so I learned to code. Now I'm looking for a job where I can show my skill and improve with the company that hires me.

Degrees:

Certification as Full Stack Web Developer from Wyncode Academy

2019

Bachelor of Arts degree in Studio Art from Florida Atlantic University 2014

Associate of Arts degree from Palm Beach State College

2012

Languages:

HTML5, CSS3, JavaScript, Python, JQuery, Ruby

Libraries:

JQuery, React.JS, AngularJS, Rails, React on Rails

      </p>
    </div>
    <a href="#top">Top</a>
   </div>
   )
 }
}
export default Home;

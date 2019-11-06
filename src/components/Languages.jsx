import React from 'react';
import '../styles/portfolio.css';


class Languages extends React.Component {
 render() {
   return (
     <div className="Languages" id="languages">
       <div className="Languages-images">
         <img src="images/html-logo.png" alt="htmlLogo" className="Languages-images"/>
         <img src="images/css-logo.png" alt="cssLogo" className="Languages-images"/>
         <img src="images/js-logo.png" alt="jsLogo" className="Languages-images"/>
         <img src="images/Ruby-logo.png" alt="rubyLogo" className="Languages-images"/>
         <img src="images/PHP.png" alt="PHPLogo" className="Languages-images" />
       </div>
     </div>
   )
 }
}

export default Languages;

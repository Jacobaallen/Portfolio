import React from 'react';
import Art from './Art'
import GraphicDesign from './GraphicDesign';
import Photography from './Photography';
import WebDevelopment from './WebDevelopment';

class Portfolio extends React.Component {
 render() {
   return (
     <div className="art">
      <ul>
        <Link to="/art">Art</Link>
      </ul>
    </div>
    <div className="graphicDesign">
     <ul>
        <Link to="/GraphicDesign">Graphic Design</Link>
     </ul>
    </div>
    <div className="photo">
     <ul>
        <Link to="/Photography">Photography</Link>
     </ul>
    </div>
    <div className="web">
     <ul>
        <Link to="/WebDevelopment">Web Development</Link>
     </ul>
    </div>
   )
 }
}
export default Portfolio;

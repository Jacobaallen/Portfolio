import React from 'react';
import HomeCarousel from './HomeCarousel';


class Home extends React.Component {
 render() {
   return (
   <div className="master">
    <header>
      <div className = "HomeCarousel">
          <HomeCarousel/>
        </div>
    </header>
   </div>
   )
 }
}
export default Home;

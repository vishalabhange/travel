// showcase.js
import React from 'react';
import Header from './Header';
import Sidebar from './SideBar';
import Destinations from './Destinations';
import CreateTrip from './CreateTrip';
import FullPageSlider from '../components/FullPageSlider.js';
import Last from '../components/Last.js';

import '../Css/GifContainer.css'; // Import the CSS file
import Adventure from './Adventure.js';
import Review from './Review.js';

const Showcase = () => {
  return (
    <>
      <Header />
      <Sidebar />

      {/* Component coming from the top */}

        <FullPageSlider />
   

        <Destinations />



        <CreateTrip />

        <Adventure/>



       <Review/>

        <Last />
   

      {/* GIF at right bottom */}
      <div className="gif-container">
        <img
          src="https://cdn.dribbble.com/users/2287419/screenshots/19125055/media/dc454ab75b8e79d77af701ea8a286fc4.gif"
          alt="Travel Boy GIF"
        />
      </div>
    </>
  );
};

export default Showcase;

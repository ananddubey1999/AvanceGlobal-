import React from 'react';
import './RestaurantCost.css'; // Import your CSS file
import {
  FcReadingEbook,
  FcStatistics,
  FcSelfServiceKiosk,
} from "react-icons/fc"; // Import the mail icon from react-icons
import { Link } from 'react-router-dom';

function RestaurantCost() {
  return (
    <div className="Restaurant-free-container">
      <h1>Select Your Restaurant Platform</h1>
      <p>Choose what's more promising for your Restaurant sales and promotion!</p>
      <div className="Restaurantframes">
        {/* Frame 1 */}
        <Link to="/contact" className="Restaurantframe">
          <div className="Restaurantframe-content">
            <div className="Restauranticon">
              <FcReadingEbook size={110} /> {/* Use the mail icon */}
            </div>
            <p>Mail Services</p>
          </div>
        </Link>
        <Link to="/Webdevelopment" className="Restaurantframe">
          <div className="Restaurantframe-content">
            <div className="Restauranticon">
              <FcSelfServiceKiosk size={110} /> {/* Use the desktop computer icon */}
            </div>
            <p>Web Development Services</p>
          </div>
        </Link>
        <Link to="/contact" className="Restaurantframe">
          <div className="Restaurantframe-content">
            <div className="Restauranticon">
              <FcStatistics size={110} /> {/* Use the phone icon */}
            </div>
            <p>Phone Services</p>
          </div>
        </Link>
        {/* Add more frames as needed */}
      </div>

    </div>
  );
}


export default RestaurantCost

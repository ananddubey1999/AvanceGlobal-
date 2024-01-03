import React from 'react';
import './Calcost.css'; // Import your CSS file
import {
  FcInvite,
  FcComboChart,
  FcFactoryBreakdown,
} from "react-icons/fc";// Import the mail icon from react-icons
import { Link } from 'react-router-dom';

function Calcost() {
  return (
    <div className="Cal-free-container">
      <h1>Which Blockchain Solution you require?</h1>
      <div className="Calframes">
        {/* Frame 1 */}
        <Link to="/contact" className="Calframe">
          <div className="Calframe-content">
            <div className="Calicon">
              <FcInvite size={110} /> {/* Use the mail icon */}
            </div>
            <p>Mail Services</p>
          </div>
        </Link>
        <Link to="/Webdevelopment" className="Calframe">
          <div className="Calframe-content">
            <div className="Calicon">
              <FcFactoryBreakdown size={110} /> {/* Use the desktop computer icon */}
            </div>
            <p>Web Development Services</p>
          </div>
        </Link>
        <Link to="/contact" className="Calframe">
          <div className="Calframe-content">
            <div className="Calicon">
              <FcComboChart size={110} /> {/* Use the phone icon */}
            </div>
            <p>Phone Services</p>
          </div>
        </Link>
        {/* Add more frames as needed */}
      </div>

    </div>
  );
}

export default Calcost

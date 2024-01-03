import React from 'react';
import './RealState.css'; // Import your CSS file
import {
  FcInspection,
  FcPositiveDynamic,
  FcMindMap,
} from "react-icons/fc"; // Import the mail icon from react-icons
import { Link } from 'react-router-dom';

function RealState() {
  return (
    <div className="Rael-free-container">
      <h1>Platform</h1>
      <p>Choose the App type on which you want to build your Real-Estate App</p>
      <div className="Raelframes">
        {/* Frame 1 */}
        <Link to="/contact" className="Raelframe">
          <div className="Raelframe-content">
            <div className="Raelicon">
              <FcInspection size={110} /> {/* Use the mail icon */}
            </div>
            <p>Mail Services</p>
          </div>
        </Link>
        <Link to="/Webdevelopment" className="Raelframe">
          <div className="Raelframe-content">
            <div className="Raelicon">
              <FcMindMap size={110} /> {/* Use the desktop computer icon */}
            </div>
            <p>Web Development Services</p>
          </div>
        </Link>
        <Link to="/contact" className="Raelframe">
          <div className="Raelframe-content">
            <div className="Raelicon">
              <FcPositiveDynamic size={110} /> {/* Use the phone icon */}
            </div>
            <p>Phone Services</p>
          </div>
        </Link>
        {/* Add more frames as needed */}
      </div>

      {/* Button */}
      <div className="button-container">
        <button className="blue-button">Click Here</button>
      </div>
    </div>
  );
}

export default RealState;

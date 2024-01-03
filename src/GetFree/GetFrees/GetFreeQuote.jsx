// GetFreeQuote.jsx

import React from 'react';
import './GetFreeQuote.css'; // Import your CSS file
// Import the mail icon from react-icons
  import { FcAndroidOs,FcMultipleDevices,
           FcKindle ,
           FcDepartment,
           FcCalculator,
           FcFaq,
           FcViewDetails,FcShipped,
           FcGraduationCap,
  
          } from "react-icons/fc";
import { Link } from 'react-router-dom';

function GetFreeQuote() {
  return (
    <div className="get-free-container">
      <h1>Get an Estimate of your Project</h1>
      <p>
      If you have an idea, it’s time to turn it into a reality & find the estimated cost
      </p>
      <h2>What type of project do you need?</h2>
      <div className="Getframes">
        {/* Frame 1 */}
        <Link to="/MobileApps" className="Getframe">
          <div className="Getframe-content">
            <div className="Geticon">
              <FcAndroidOs size={120} /> {/* Use the mail icon */}
            </div>
            <p>How much to <br /> make an App</p>
          </div>
        </Link>
        <Link to="/Webdevelopment" className="Getframe">
          <div className="Getframe-content">
            <div className="Geticon">
              <FcMultipleDevices size={120} /> {/* Use the mail icon */}
            </div>
            <p>Web Development <br /> Services</p>
          </div>
        </Link>
        <Link to="/CMScost" className="Getframe">
          <div className="Getframe-content">
            <div className="Geticon">
              <FcKindle  size={120} /> {/* Use the mail icon */}
            </div>
            <p>How Much a <br /> CSM Cost</p>
          </div>
        </Link>
        <Link to="/RealStates" className="Getframe">
          <div className="Getframe-content">
            <div className="Geticon">
              <FcDepartment size={120} /> {/* Use the mail icon */}
            </div>
            <p>How Much To Make <br /> Real-State App</p>
          </div>
        </Link>
        <Link to="/CalculateCosts" className="Getframe">
          <div className="Getframe-content">
            <div className="Geticon">
              <FcCalculator size={120} /> {/* Use the mail icon */}
            </div>
            <p>Calculate Blockchain <br />Based App Cost</p>
          </div>
        </Link>
        <Link to="/Chatbot" className="Getframe">
          <div className="Getframe-content">
            <div className="Geticon">
              <FcFaq size={120} /> {/* Use the mail icon */}
            </div>
            <p>How much a <br /> Chatbot Project Cost?</p>
          </div>
        </Link>
        <Link to="/CalculateCosts" className="Getframe">
          <div className="Getframe-content">
            <div className="Geticon">
              <FcViewDetails size={120} /> {/* Use the mail icon */}
            </div>
            <p>Calculate Restaurant <br /> Solution Cost </p>
          </div>
        </Link>
        
        <Link to="/Restaurant" className="Getframe">
          <div className="Getframe-content">
            <div className="Geticon">
              <FcShipped size={120} /> {/* Use the mail icon */}
            </div>
            <p>Calculate Restaurant <br /> Solution Cost </p>
          </div>
        </Link>
        <Link to="/TestingProjects" className="Getframe">
          <div className="Getframe-content">
            <div className="Geticon">
              <FcGraduationCap size={120} /> {/* Use the mail icon */}
            </div>
            <p>Academic-Cap  <br /> Services</p>
          </div>
        </Link>
        {/* Repeat for Frame 2 to 8 */}
        {/* ... */}
      </div>
      <p>
      Whether you need a mobile app, web app, CMS or a Restaurant Solution, we have everything you need at one place! Choose the desired option to deploy
      your app and features you need to include in your app to scale your business to newer heights.
      </p>
    </div>
  );
}

export default GetFreeQuote;


{/* <Link to="/contact">
<button className="custom-button2">Contact Us</button>
</Link> */}
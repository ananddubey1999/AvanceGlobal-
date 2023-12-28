// GetFreeQuote.jsx

import React from 'react';
import './GetFreeQuote.css'; // Import your CSS file
import { HiOutlineMail } from 'react-icons/hi'; // Import the mail icon from react-icons
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
        <Link to="/contact" className="Getframe">
          <div className="Getframe-content">
            <div className="Geticon">
              <HiOutlineMail size={140} /> {/* Use the mail icon */}
            </div>
            <p>A paragraph goes here for Frame 1</p>
          </div>
        </Link>
        <Link to="/Webdevelopment" className="Getframe">
          <div className="Getframe-content">
            <div className="Geticon">
              <HiOutlineMail size={140} /> {/* Use the mail icon */}
            </div>
            <p>A paragraph goes here for Frame 1</p>
          </div>
        </Link>
        <Link to="/contact" className="Getframe">
          <div className="Getframe-content">
            <div className="Geticon">
              <HiOutlineMail size={140} /> {/* Use the mail icon */}
            </div>
            <p>A paragraph goes here for Frame 1</p>
          </div>
        </Link>
        <Link to="/contact" className="Getframe">
          <div className="Getframe-content">
            <div className="Geticon">
              <HiOutlineMail size={140} /> {/* Use the mail icon */}
            </div>
            <p>A paragraph goes here for Frame 1</p>
          </div>
        </Link>
        <Link to="/contact" className="Getframe">
          <div className="Getframe-content">
            <div className="Geticon">
              <HiOutlineMail size={140} /> {/* Use the mail icon */}
            </div>
            <p>A paragraph goes here for Frame 1</p>
          </div>
        </Link>
        <Link to="/contact" className="Getframe">
          <div className="Getframe-content">
            <div className="Geticon">
              <HiOutlineMail size={140} /> {/* Use the mail icon */}
            </div>
            <p>A paragraph goes here for Frame 1</p>
          </div>
        </Link>
        <Link to="/contact" className="Getframe">
          <div className="Getframe-content">
            <div className="Geticon">
              <HiOutlineMail size={140} /> {/* Use the mail icon */}
            </div>
            <p>A paragraph goes here for Frame 1</p>
          </div>
        </Link>
        
        <Link to="/contact" className="Getframe">
          <div className="Getframe-content">
            <div className="Geticon">
              <HiOutlineMail size={140} /> {/* Use the mail icon */}
            </div>
            <p>A paragraph goes here for Frame 1</p>
          </div>
        </Link>
        <Link to="/contact" className="Getframe">
          <div className="Getframe-content">
            <div className="Geticon">
              <HiOutlineMail size={140} /> {/* Use the mail icon */}
            </div>
            <p>A paragraph goes here for Frame 1</p>
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
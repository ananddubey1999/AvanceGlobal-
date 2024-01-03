import React from 'react';
import './Chatbots.css'; // Import your CSS file
import {
    FcExpired,
    FcInspection,
    FcPuzzle,
    FcMediumPriority,
    FcLowPriority,
    FcMultipleInputs,
  } from "react-icons/fc"; // Import the mail icon from react-icons
import { Link } from 'react-router-dom';

function Chatbots() {
  return (
    <div className="Chat-free-container">
      <h1>Select the Industry for which you want to build a Chatbot</h1>
      <p>
      Besides delivering 24*7 customer service, chatbots are changing the way businesses interact with their customers.
       <br /> Let’s calculate how much does it cost to build a chatbot with our simple and accurate chatbot estimation tool.
      </p>
      <div className="Chatframes">
        {/* Frame 1 */}
        <Link to="/contact" className="Chatframe">
          <div className="Chatframe-content">
            <div className="Chaticon">
              <FcExpired size={120} /> {/* Use the mail icon */}
            </div>
            <p>Mail Services</p>
          </div>
        </Link>
        <Link to="/Webdevelopment" className="Chatframe">
          <div className="Chatframe-content">
            <div className="Chaticon">
              <FcPuzzle size={120} /> {/* Use the mail icon */}
            </div>
            <p>Web Development Services</p>
          </div>
        </Link>
        <Link to="/CMScost" className="Chatframe">
          <div className="Chatframe-content">
            <div className="Chaticon">
              <FcInspection size={120} /> {/* Use the mail icon */}
            </div>
            <p>How Much a <br /> CSM Cost</p>
          </div>
        </Link>
        <Link to="/RealStates" className="Chatframe">
          <div className="Chatframe-content">
            <div className="Chaticon">
              <FcMediumPriority size={120} /> {/* Use the mail icon */}
            </div>
            <p>How Much To Make <br /> Real-State App</p>
          </div>
        </Link>
        <Link to="/CalculateCosts" className="Chatframe">
          <div className="Chatframe-content">
            <div className="Chaticon">
              <FcLowPriority size={120} /> {/* Use the mail icon */}
            </div>
            <p>Calculate Blockchain <br />Based App Cost</p>
          </div>
        </Link>
        <Link to="/Chatbot" className="Chatframe">
          <div className="Chatframe-content">
            <div className="Chaticon">
              <FcMultipleInputs size={120} /> {/* Use the mail icon */}
            </div>
            <p>How much a <br /> Chatbot Project Cost?</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Chatbots

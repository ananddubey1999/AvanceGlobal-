
import React from 'react';
import './CMScost.css'; // Import your CSS file
// Import the mail icon from react-icons
  import { FcAddressBook,FcMultipleSmartphones,FcPhone,FcComments ,FcCalculator,FcClapperboard,FcElectricalSensor,FcBusiness,FcGraduationCap,FcExport
  
  } from "react-icons/fc";
import { Link } from 'react-router-dom';

function CMScost() {
  return (
    <div className="CMS-free-container">
      <h1>Best Solution</h1>
      <p>
      Pick up the best among the available CMS options that will <br />
       be suitablefor enhancing your website.
      </p>
      <div className="CMSframes">
        {/* Frame 1 */}
        <Link to="/contact" className="CMSframe">
          <div className="CMSframe-content">
            <div className="CMSicon">
              < FcAddressBook size={120} /> {/* Use the mail icon */}
            </div>
            <p>Mail Services</p>
          </div>
        </Link>
        <Link to="/Webdevelopment" className="CMSframe">
          <div className="CMSframe-content">
            <div className="CMSicon">
              <FcMultipleSmartphones size={120} /> {/* Use the mail icon */}
            </div>
            <p>Web Development Services</p>
          </div>
        </Link>
        <Link to="/contact" className="CMSframe">
          <div className="CMSframe-content">
            <div className="CMSicon">
              <FcPhone size={120} /> {/* Use the mail icon */}
            </div>
            <p>Phone Services</p>
          </div>
        </Link>
        <Link to="/contact" className="CMSframe">
          <div className="CMSframe-content">
            <div className="CMSicon">
              <FcComments  size={120} /> {/* Use the mail icon */}
            </div>
            <p>Chat Services</p>
          </div>
        </Link>
        <Link to="/contact" className="CMSframe">
          <div className="CMSframe-content">
            <div className="CMSicon">
              <FcCalculator size={120} /> {/* Use the mail icon */}
            </div>
            <p>Calculator Services</p>
          </div>
        </Link>
        <Link to="/contact" className="CMSframe">
          <div className="CMSframe-content">
            <div className="CMSicon">
              <FcClapperboard size={120} /> {/* Use the mail icon */}
            </div>
            <p>A Photograph Services</p>
          </div>
        </Link>
        <Link to="/contact" className="CMSframe">
          <div className="CMSframe-content">
            <div className="CMSicon">
              <FcElectricalSensor size={120} /> {/* Use the mail icon */}
            </div>
            <p> ChartLine Services</p>
          </div>
        </Link>
        
        <Link to="/contact" className="CMSframe">
          <div className="CMSframe-content">
            <div className="CMSicon">
              <FcBusiness size={120} /> {/* Use the mail icon */}
            </div>
            <p>Shopping-Bag Services</p>
          </div>
        </Link>
        <Link to="/contact" className="CMSframe">
          <div className="CMSframe-content">
            <div className="CMSicon">
              <FcGraduationCap size={120} /> {/* Use the mail icon */}
            </div>
            <p>Academic-Cap Services</p>
          </div>
        </Link>
        <Link to="/contact" className="CMSframe">
          <div className="CMSframe-content">
            <div className="CMSicon">
              <FcExport size={120} /> {/* Use the mail icon */}
            </div>
            <p>Academic-Cap Services</p>
          </div>
        </Link>
        {/* Repeat for Frame 2 to 8 */}
        {/* ... */}
      </div>
    </div>
  );
}

export default CMScost

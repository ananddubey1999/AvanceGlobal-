import React from 'react';
import './TestingProject.css'; // Import your CSS file
import { Link } from 'react-router-dom';

function TestingProject() {
  return (
    <div className="TP-free-container">
      <h1>Choose the Desired Platform that needs to be tested</h1>
      <p className='graph'>Guarantee a Flawless User Experience and Accelerate Time-To-Market, Without Compromising Quality.</p>
      <div className="TPframes">
        {/* Frame 1 */}
        <Link to="/contact" className="TPframe">
          <div className="TPframe-content">
            <div className="TPicon">
              <img src="./Img/A3.png" alt="Mail Services" /> {/* Use the mail image */}
            </div>
          </div>
        </Link>
        <Link to="/Webdevelopment" className="TPframe">
          <div className="TPframe-content">
            <div className="TPicon">
              <img src="./Img/A4.png" alt="Web Development Services" /> {/* Use the web development image */}
            </div>
            
          </div>
        </Link>
        <Link to="/Webdevelopment" className="TPframe">
          <div className="TPframe-content">
            <div className="TPicon">
              <img src="./Img/A5.png" alt="Web Development Services" /> {/* Use the web development image */}
            </div>
            
          </div>
        </Link>
        {/* Add more frames as needed */}
      </div>
    </div>
  );
}

export default TestingProject

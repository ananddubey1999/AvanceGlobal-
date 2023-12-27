import React from 'react';
import './Solutions.css'; // Import the CSS file for styling

function Solutions() {
  return (
    <div className="solutionsContainer">
      <div className="leftContainer">
        <h1>Solutions Offering</h1>
        <p>
          AGC is an innovative end-to-end enterprise solution provider for mission-critical applications, IT Infrastructure Service setups, Internet of Things (IoT), Training and ERPs across industry verticals.
        </p>
        <div className="topicContainer">
          {/* Content for 6 topics */}
          <div className="topic">Systems Integrator</div>
          <div className="topic">Custom Software Development</div>
          <div className="topic">PMO Outsourcing</div>
          <div className="topic">Call Center Setup & Operations</div>
          <div className="topic">Customized ERP Solutions</div>
          <div className="topic">Digital Marketing</div>
        </div>
      </div>
      <div className="rightContainer">
        {/* Your image content */}
        <img src="https://avanceglobal.in/assets/img/choose-1.png" alt="Image 1" className='img'/>
      </div>
    </div>
  );
}

export default Solutions;

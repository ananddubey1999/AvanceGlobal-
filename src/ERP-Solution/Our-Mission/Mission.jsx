import React from 'react';
import './Mission.css'; // Make sure to import your CSS file

function Mission() {
  return (
    <div className="mission-container">
      <div className="mission-content">
        <h2 className="mission-title"><span style={{ color: '#5da8f8' }}>Our Mission </span> is to Make Your Business Better Through Technology.</h2>
        <p className="mission-paragraph">
          We believe in delivering simple, secure, and cost-effective solutions, Our Team consistently strives for delivering smart designs, fresh ideas, CRM, ERPs, custom applications development and support and visual concepts of an exceptional standard for every project.<br/>
          <br/>
          We are an innovative end-to-end enterprise solution provider for mission-critical applications, IT Infrastructure Service setups, Intelligent Transportation Systems (ITS), PA Systems & Smart Biometric Services across multiple geographies.<br/>
          <br/>
          We help you build a robust platform considering the best available resources for Networking, Surveillance & IT Infrastructure Management, and Cyber Security Management, that supports smart AI-integrated audio-visual & multimedia solutions from the best of OEMs across the globe.<br/>
          <br/>
          Our clients enjoy the cutting-edge art direction & Design of each element and we proudly host ourselves as "One Stop Solution Providers"
        </p>
        <div className="skill-bars">
          <div className="skill-bar">
            <div className="skill-name">Web Development</div>
            <div className="skill-bar-wrapper">
              <div className="skill-progress" style={{ width: '80%' }}></div>
              <span className="skill-value">80%</span>
            </div>
          </div>
          <div className="skill-bar">
            <div className="skill-name">IOS Apps</div>
            <div className="skill-bar-wrapper">
              <div className="skill-progress" style={{ width: '75%' }}></div>
              <span className="skill-value">75%</span>
            </div>
          </div>
          <div className="skill-bar">
            <div className="skill-name">Discovery & Strategy</div>
            <div className="skill-bar-wrapper">
              <div className="skill-progress" style={{ width: '70%' }}></div>
              <span className="skill-value">70%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mission-image">
        <img src="./Img/erp-software-1.png" alt="Mission Image" />
      </div>
    </div>
  );
}

export default Mission;

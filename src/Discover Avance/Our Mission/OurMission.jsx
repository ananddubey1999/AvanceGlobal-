import React from 'react';
import './OurMission.css'; // Make sure to import your CSS file

function OurMission() {
  return (
    <div className="mission-container">
      <div className="mission-content">
        <h2 className="mission-title"><span style={{ color: '#5da8f8' }}>Our Mission </span> is to Make Your Business Better Through Technology.</h2>
        <div className="mission-details">
          <p className="mission-paragraph">
          We believe in delivering simple, secure, and cost-effective solutions, Our Team consistently strives for delivering smart designs, fresh ideas, CRM, ERPs, custom applications development and support and visual concepts of an exceptional standard for every project.<br/>
           <br/>
          We are an innovative end-to-end enterprise solution provider for mission-critical applications, IT Infrastructure Service setups, Intelligent Transportation Systems (ITS), PA Systems & Smart Biometric Services across multiple geographies.<br/>
            <br/>
          We help you build a robust platform considering the best available resources for Networking, Surveillance & IT Infrastructure Management, and Cyber Security Management, that supports smart AI-integrated audio-visual & multimedia solutions from the best of OEMs across the globe.<br/>
          <br/>
          Our clients enjoy the cutting-edge art direction & Design of each element and we proudly host ourselves as "One Stop Solution Providers"
          </p>
        </div>
      </div>
      <div className="mission-image">
        <img src="./Img/about.jpg" alt="Mission Image" />
      </div>
    </div>
  );
}

export default OurMission;

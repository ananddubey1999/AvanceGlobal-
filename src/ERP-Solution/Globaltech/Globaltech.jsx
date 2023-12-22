import React from 'react';
import './Globaltech.css'; // Make sure to import your CSS file

function Globaltech() {
  return (
    <div className="global-container">
      <div className="left-section">
        <h2 className="section-title">Avance Globaltech provides life cycle ERP Solutions that includes</h2>
        <ul className="computer-list">
          <li>Requirement Analysis</li>
          <li>Enterprise Architecture Design</li>
          <li>Customization (Designing and Development)</li>
          <li>Redesigning if required</li>
          <li>Migration</li>
          <li>Quality Assurance & Testing</li>
          <li>Implementation</li>
          <li>Technical Documentation</li>
          <li>Training</li>
          <li>Rollout</li>
          <li>Support Services</li>
          <li>Helpdesk</li>
          <li>Application Maintenance</li>
          {/* Add more list items as needed */}
        </ul>
      </div>
      <div className="right-section">
        <img src="./Img/erp2.jpg" alt="Description" />
      </div>
    </div>
  );
}

export default Globaltech;

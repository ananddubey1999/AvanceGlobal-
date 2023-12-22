import React from 'react';
import './Custom.css';

function Custom() {
  return (
    <div className="Custom-container5">
      <h2 className="Custom-title5">Custom Software Development</h2>
      <div className="Custom-content5">
        <div className="Custom-text5">
          <p>
            "As a software development company, we consistently strive for excellence, pushing the boundaries of 
            innovation and delivering exceptional solutions that set industry standards, making us the premier
            choice for clients seeking the very best in software development.” Our Process for UATs, 
            & Unit Tests before a project comes into deployment and go-live, deliver a robust, fully scalable and 
            flexible build processes to facilitate the effective management of business-critical systems.
          </p>
          <br/>
          <h3>We prioritize our approach for Web App Development:-</h3>
          <ul className="Custom-computer-list5">
            <li><span className="circle-icon"></span> Must Have:- Non-negotiable app features your app can't do without.</li>
            <li><span className="circle-icon"></span> Could Have:- Good-to-have features that will have minimal impact if left out.</li>
            <li><span className="circle-icon"></span> Should Have:- Important app features that add value but aren't vital.</li>
            <li><span className="circle-icon"></span> Won't Have:- Lowest priority app features that won't add significant value just yet.</li>
            {/* Add more list items as needed */}
          </ul>
        </div>
        <div className="Custom-image-container5">
          <img src="./Img/blog-4.jpg" alt="Your Image" />
        </div>
      </div>
    </div>
  );
}

export default Custom;

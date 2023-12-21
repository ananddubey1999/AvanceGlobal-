import React from 'react';
import './CallCenter.css';

function CallCenter() {
  return (
    <div className="Invest-container5">
      <h2 className="title5">Call Center Setup & Operations</h2>
      <div className="content5">
        <div className="text5">
          <h3 className="subtitle">Outbound Suite</h3>
          <p>
          Avance outbound predictive dialer (PD) effectively integrates all outbound process (telemarketing, Sales, Surveys, and Collections etc.) with the process life cycle. It precisely manages 
          outbound calling to achieve maximum productivity supporting a variety of campaign and list management strategies.
          </p>
          <h3 className="subtitle">Inbound Suite</h3>
          <p>
          Avance Noble Inbound Solution can provide sizeable improvement to the productivity of your contact center. Skill based routing organizes incoming contacts and sends them to the most appropriate agents,
           which helps in covering a huge customer base with a handful of agents, helping a lot in maintaining, the budget.
          </p>
        </div>
        <div className="image-container5">
          <img src="./Img/call.jpg" alt="Your Image" />
        </div>
      </div>
    </div>
  );
}

export default CallCenter;

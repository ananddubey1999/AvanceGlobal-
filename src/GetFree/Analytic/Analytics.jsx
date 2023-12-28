import React from 'react';
import './Analytics.css';

function Analytics() {
  return (
    <div className="Analytics-wrapper">
      <div className="Analytics-container">
        <div className="Analytics-left">
          <h2>How Mature Is Your Organization's
            <br />Analytics Program?</h2>
          <p>Not even a single organization evolves through these maturity <br />
              phases at the same rate in a single way!</p>
        </div>
        <div className="Analytics-right">
          <h2>Where does your enterprise
           <br />stand into this picture?</h2>
          <button>Calculate Analytics Maturity Score</button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;

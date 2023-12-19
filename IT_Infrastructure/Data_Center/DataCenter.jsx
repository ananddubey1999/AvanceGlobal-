import React from 'react';
import './DataCenter.css'; // Don't forget to create and link your CSS file

function DataCenter() {
  return (
    <div className="data-center-container">
      <div className="data-center-title">
        <h1>Data Center Services</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          auctor nisi sit amet massa lacinia, nec cursus tortor hendrerit.
          Integer eget purus id dui mollis pharetra. Donec euismod erat ut
          velit interdum, nec consequat odio sodales.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          auctor nisi sit amet massa lacinia, nec cursus tortor hendrerit.
          Integer eget purus id dui mollis pharetra. Donec euismod erat ut
          velit interdum, nec consequat odio sodales.
        </p>
      </div>

      <div className="data-center-content">
        <div className="data-center-left">
          <h2>Benefits of Dwdicated Data Centers</h2>
          <ul>
            <li>Computer 1 Computer 1Computer 1Computer 1</li>
            <li>Computer 2</li>
            <li>Computer 3</li>
            <li>Computer 3</li>
            <li>Computer 3</li>
            {/* Add more items as needed */}
          </ul>
        </div>

        <div className="data-center-right">
          <h2>Advantage AGC</h2>
          <ul>
            <li>Computer 1 Computer 1Computer 1Computer 1</li>
            <li>Computer 2</li>
            <li>Computer 3</li>
            <li>Computer 3</li>
            <li>Computer 3</li>
            {/* Add more items as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DataCenter;

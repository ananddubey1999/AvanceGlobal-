import React from 'react';
import './Hardwares.css'; // Don't forget to create and link your CSS file

function Hardwares() {
  return (
    <div className="container2">
      <div className="title2">
        <h1>Hardware</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          auctor nisi sit amet massa lacinia, nec cursus tortor hendrerit.
          Integer eget purus id dui mollis pharetra. Donec euismod erat ut
          velit interdum, nec consequat odio sodales.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          auctor nisi sit amet massa lacinia, nec cursus tortor hendrerit.
          Integer eget purus id dui mollis pharetra. Donec euismod erat ut
        </p>
      </div>
      <div className="hardware-info2">
        <div className="left-paragraph2">
          <p>
            Left side content goes here. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vestibulum auctor nisi sit amet massa
            lacinia, nec cursus tortor hendrerit. Integer eget purus id dui
            mollis pharetra.
            Left side content goes here. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vestibulum auctor nisi sit amet massa
            lacinia, nec cursus tortor hendrerit. Integer eget purus id dui
            mollis pharetra.
          </p>
          <div className="computers-list">
        <ul>
          <li>Computer 1 Computer 1 Computer 1 Computer 1 Computer 1</li>
          <li>Computer 2</li>
          <li>Computer 3</li>
          <li>Computer 4 Computer 1 Computer 1 Computer 1</li>
          <li>Computer 5 Computer 1 Computer 1 Computer</li>
          <li>Computer 6 Computer 1 Computer</li>
          <li>Computer 1 Computer 1 Computer 1</li>
          <li>Computer 2 Computer</li>
          <li>Computer 3 Computer</li>
          <li>Computer 4 Computer</li>
        </ul>
        </div>
        </div>
        <div className="right-image2">
          <img src="./Img/choose-1.png" alt="Hardware"  />
        </div>
      </div>
    </div>
  );
}

export default Hardwares;

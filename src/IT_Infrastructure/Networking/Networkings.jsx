import React from 'react';
import './Networkings.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faGlobe, faServer } from '@fortawesome/free-solid-svg-icons';

function Networkings() {
  return (
    <div>
      <div className='Networking'>
        <h1 className='Networking-h1'>Active Passive Networking</h1>
        <p className="networkings-paragraph">
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
      <div className="Networking-container">
        <div className="Networking-item">
          <FontAwesomeIcon icon={faDesktop} size="3x" className='icons1'/>
          <h2>Our portfolio consists of</h2>
          <p>We specialize in creating and optimizing high-quality, custom webportal & Mobile App for businesses and organizations of all sizes. Building mobile-friendly and easy-to-use interface for clients.</p>
          <a href="#readmore1" className="read-more">Read More</a>
          <div id="readmore1" className="more-info"></div>
        </div>
        <div className="Networking-item">
          <FontAwesomeIcon icon={faGlobe} size="3x" className='icons1' />
          <h2>Passive Networking Solutions</h2>
          <p>We are the premier Information Technologies provider, delivering cutting-edge solutions that redefine industry standards.</p>
          <a href="#readmore2" className="read-more">Read More</a>
          <div id="readmore2" className="more-info"></div>
        </div>
        <div className="Networking-item">
          <FontAwesomeIcon icon={faServer} size="3x" className='icons1'/>
          <h2>Active Network</h2>
          <p>Experience the expertise of our top-tier project management trainers, dedicated to educating both aspiring candidates and corporate professionals.</p>
          <a href="#readmore3" className="read-more">Read More</a>
          <div id="readmore3" className="more-info"></div>
        </div>
      </div>
    </div>
  );
}

export default Networkings;

import React from 'react'
import './Erp.css';

function Erp() {
    return (
        <div className="Erp-container6">
          <h2 className="Erp-title6">Customized ERP Solutions</h2>
          <div className="Erp-content6">
            <div className="Erp-text6">
              <p>
              We customized Enterprise Resource Planning solutions and have expertise on diverse platforms. 
              We deploy latest technology. These ERP solutions are effective at streamlining business processes that cut across the functional areas of your 
              business.<br/>

              We have Microsoft ERP offerings include Microsoft Dynamics Navision, Microsoft Dynamics CRM, Microsoft Dynamics Axapta, Microsoft Business Intelligence and more.
              </p>
              <h3>Avance Globaltech provides life cycle ERP Solutions that includes:-</h3>
              <ul className="Erp-computer-list6">
                <li>Requirement Analysis</li>
                <li>Enterprise Architecture Design</li>
                <li>Customization (Designing and Development)</li>
                <li>Redesigning if required</li>
                <li>Quality Assurance & Testing</li>
                {/* Add more list items as needed */}
              </ul>
            </div>
            <div className="Erp-image-container6">
              <img src="./Img/erp-software-1.png" alt="Your Image" />
            </div>
          </div>
        </div>
      );
    } 

export default Erp

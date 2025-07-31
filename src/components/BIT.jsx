import React from 'react';
import { Link } from 'react-router-dom';
import certificate from '../assets/china-certificate.jpg';
import './Certificate.css';

function ChinaCertificate() {
  return (
    <div className="certificate-container">
      <h2>Beijing Institute of Technology State of Accomplishement</h2>
      <Link to ="/" className="back-button">
        ←--- CV ←--- 
      </Link>
      <img src={certificate} alt="China Certificate" className="certificate-image" />
      <Link to ="/" className="back-button">
        ←--- CV ←--- 
      </Link>
    </div>
  );
}

export default ChinaCertificate;
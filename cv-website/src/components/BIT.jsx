import React from 'react';
import certificate from '../assets/china-certificate.jpg';
import './Certificate.css';

function ChinaCertificate() {
  return (
    <div className="certificate-container">
      <h2>China Certificate</h2>
      <img src={certificate} alt="China Certificate" className="certificate-image" />
    </div>
  );
}

export default ChinaCertificate;
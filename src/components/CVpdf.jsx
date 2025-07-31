import React from 'react';
import { Link } from 'react-router-dom';
import certificate from '../assets/cert-en.pdf';
import './Certificate.css';

function EnglishCertificate() {
  return (
    <div className="certificate-container">
      <h2>English Certificate</h2>
      <p>
        <a href={certificate} target="_blank" rel="noopener noreferrer">
          Open Certificate (PDF)
        </a>
      </p>
      <Link to="/" className="back-button">
        Back to CV
      </Link>
    </div>
  );
}

export default EnglishCertificate;
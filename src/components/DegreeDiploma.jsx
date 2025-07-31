import React from 'react';
import { Link } from 'react-router-dom';
import diploma from '../assets/degree-diploma.jpg';
import './Certificate.css';

function DegreeDiploma() {
  return (
    <div className="certificate-container">
      <h2>Degree Diploma</h2>
      <img src={diploma} alt="Degree Diploma" className="certificate-image" />
      <Link to="/" className="back-button">
        ←--- CV ←---
      </Link>
    </div>
  );
}

export default DegreeDiploma;
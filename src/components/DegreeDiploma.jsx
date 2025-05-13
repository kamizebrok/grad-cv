import React from 'react';
import diploma from '../assets/degree-diploma.jpg';
import './Certificate.css';

function DegreeDiploma() {
  return (
    <div className="certificate-container">
      <h2>Degree Diploma</h2>
      <img src={diploma} alt="Degree Diploma" className="certificate-image" />
    </div>
  );
}

export default DegreeDiploma;
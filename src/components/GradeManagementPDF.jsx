import React from 'react';
import { Link } from 'react-router-dom';

const pdfUrl = '/grad-cv/src/assets/grade-management-details.pdf';

function GradeManagementPDF({ language = 'pl' }) {
  const isPL = language === 'pl';

  return (
    <div style={{ width: '100%', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>
        {isPL
          ? 'System Zarządzania Ocenami – Szczegóły projektu'
          : 'Grade Management System – Project Details'}
      </h2>
      <iframe
        src={pdfUrl}
        title={isPL ? 'Szczegóły projektu System Zarządzania Ocenami' : 'Grade Management System Details'}
        width="100%"
        height="800px"
        style={{ border: '1px solid #ccc', borderRadius: '8px', margin: '2rem 0' }}
      />
      <a href={pdfUrl} target="_blank" rel="noopener noreferrer" style={{ marginTop: '1rem' }}>
        {isPL ? 'Otwórz PDF w nowej karcie' : 'Open PDF in a new tab'}
      </a>

        <Link to="/projects" className="back-button">
            Back to CV
        </Link>
    </div>

    
  );
}

export default GradeManagementPDF;
import React, { useState, useEffect } from "react";
import certificatesData from "../data/certificates.json";
import "../styles/Certifications.css";

const Certifications = () => {
  const [certificates, setCertificates] = useState([]);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    setCertificates(certificatesData);
  }, []);

  const handleCertificateClick = (link) => {
    setSelectedCertificate(link);
  };

  return (
    <div className="certificates-container">
      <h1>Professional Certifications</h1>
      <p className="intro-text">
        A collection of my professional certifications and achievements from various organizations. 
        These certifications represent my commitment to continuous learning and skill development 
        across different technology domains.
      </p>
      
      <a
        href={certificates.driveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="drive-button"
      >
        <span className="button-icon">📁</span>
        View Complete Certificate Collection on Google Drive
      </a>

      {certificates.organizations?.map((org, index) => (
        <div key={index} className="organization">
          <div className="org-header">
            <img 
              src={org.logo} 
              alt={`${org.name} logo`} 
              className="org-logo"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <h2>{org.name}</h2>
          </div>
          
          <div className="certificates-grid">
            {org.certificates.map((cert, certIndex) => (
              <div 
                key={certIndex} 
                className="certificate-card"
                onClick={() => handleCertificateClick(cert.link)}
              >
                <img 
                  src={`https://drive.google.com/thumbnail?id=${cert.link.split('/')[5]}`}
                  alt={cert.title}
                  className="certificate-thumbnail"
                />
                <div className="certificate-title">{cert.title}</div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {selectedCertificate && (
        <div 
          className="modal" 
          onClick={() => setSelectedCertificate(null)}
        >
          <button 
            className="close-button" 
            onClick={(e) => {
              e.stopPropagation();
              setSelectedCertificate(null);
            }}
          >
            ×
          </button>
          <iframe
            src={`${selectedCertificate.replace('/view', '/preview')}`}
            title="Certificate Preview"
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Certifications;

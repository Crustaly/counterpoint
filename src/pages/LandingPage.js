import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div 
        className="landing-page-map-bg"
        style={{ backgroundImage: 'url(/images/mapyellow.png)' }}
      ></div>
      <img src="/images/counterpointlogo.png" alt="Counterpoint" className="logo" />
      <div className="button-container">
        <button 
          className="button primary-button"
          onClick={() => navigate('/article-selection')}
        >
          Get Matched
        </button>
        <button 
          className="button secondary-button"
          onClick={() => navigate('/my-matches')}
        >
          My Matches
        </button>
      </div>
    </div>
  );
}

export default LandingPage;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import './MyMatches.css';

function MyMatches() {
  const navigate = useNavigate();

  const upcomingMatches = [
    { 
      id: 1, 
      name: 'Crystal Yang', 
      location: 'Top Hat Coffee Lounge', 
      address: ['3131 Walnut St,', 'Philadelphia, PA 19104']
    }
  ];

  const previousMatches = [
    { 
      id: 2, 
      name: 'Henry Fogel', 
      location: 'La Colombe 100 S', 
      address: ['Independence Mall W', 'Philadelphia, PA']
    }
  ];

  const handleMatchClick = (matchType, name) => {
    navigate(`/conversation-detail/${matchType}/${name}`);
  };

  return (
    <div>
      <Header />
      <div className="my-matches">
        <div className="header">
          <h1>Explore Your Matches</h1>
        </div>
      
      <div className="matches-section">
        <h2 className="section-title">upcoming matches</h2>
        <div className="matches-list">
          {upcomingMatches.map((match) => (
            <div 
              key={match.id} 
              className="match-card"
              onClick={() => handleMatchClick('upcoming', match.name)}
            >
              <div className="match-image">
                <img src={`${process.env.PUBLIC_URL}/images/cafe.jpg.png`} alt="Cafe" />
              </div>
              <div className="match-details">
                <div className="match-name">Conversation with {match.name}</div>
                <div className="match-location">
                  <div className="match-location-icon"></div>
                  <span>{match.location}</span>
                </div>
                <div className="match-address">
                  {match.address.map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="matches-section">
        <h2 className="section-title">previous matches</h2>
        <div className="matches-list">
          {previousMatches.map((match) => (
            <div 
              key={match.id} 
              className="match-card"
              onClick={() => handleMatchClick('previous', match.name)}
            >
              <div className="match-image">
                <img src={`${process.env.PUBLIC_URL}/images/cafe.jpg.png`} alt="Cafe" />
              </div>
              <div className="match-details">
                <div className="match-name">Conversation with {match.name}</div>
                <div className="match-location">
                  <div className="match-location-icon"></div>
                  <span>{match.location}</span>
                </div>
                <div className="match-address">
                  {match.address.map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}

export default MyMatches;


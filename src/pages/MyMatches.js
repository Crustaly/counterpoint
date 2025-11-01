import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import './MyMatches.css';

function MyMatches() {
  const navigate = useNavigate();

  const upcomingMatches = [
    { id: 1, name: 'Crystal Yang', location: 'Top Hat Coffee Lounge', address: '3131 Walnut St, Philadelphia, PA 19104' },
    { id: 2, name: 'Henry Fogel', location: 'La Colombe 100 S Independence Mall W', address: 'Philadelphia, PA' }
  ];

  const previousMatches = [
    { id: 3, name: 'Sophie Beren', location: 'Starbucks Downtown', address: '123 Main St, Philadelphia, PA 19102' },
    { id: 4, name: 'Marcus Wright', location: 'Blue Bottle Coffee', address: '456 Market St, Philadelphia, PA 19103' }
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
              <div className="match-image">☕</div>
              <div className="match-details">
                <div className="match-name">Conversation with {match.name}</div>
                <div className="match-location">
                  <div className="match-location-icon"></div>
                  <span>{match.location}</span>
                </div>
                <div className="match-address">{match.address}</div>
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
              <div className="match-image">☕</div>
              <div className="match-details">
                <div className="match-name">Conversation with {match.name}</div>
                <div className="match-location">
                  <div className="match-location-icon"></div>
                  <span>{match.location}</span>
                </div>
                <div className="match-address">{match.address}</div>
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


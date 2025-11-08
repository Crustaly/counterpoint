import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import './ConversationDetail.css';

function ConversationDetail() {
  const { matchType, name } = useParams();
  
  const isUpcoming = matchType === 'upcoming';

  // Match data - you can expand this with actual data structure
  const matchData = {
    'Crystal Yang': {
      name: 'Crystal Yang',
      school: 'The University of Pennsylvania',
      age: 18,
      city: 'Philadelphia, Pennsylvania',
      article: 'Free Speech at Risk in America\'s Schools',
      articleTitle: 'Free Speech at Risk in America\'s Schools',
      matchScore: 2,
      totalQuestions: 5,
      location: 'Top Hat Coffee Lounge',
      address: ['3131 Walnut St,', 'Philadelphia, PA 19104'],
      date: 'December 3, 2025',
      time: '3:00 PM (EST)',
      image: 'crystalyangsquare.jpeg'
    },
    'Henry Fogel': {
      name: 'Henry Fogel',
      school: 'The University of Pennsylvania',
      age: 20,
      city: 'Philadelphia, Pennsylvania',
      article: 'Free Speech at Risk in America\'s Schools',
      articleTitle: 'Free Speech at Risk in America\'s Schools',
      matchScore: 3,
      totalQuestions: 5,
      location: 'La Colombe 100 S',
      address: ['Independence Mall W', 'Philadelphia, PA'],
      date: 'November 15, 2025',
      time: '2:00 PM (EST)'
    }
  };

  const match = matchData[name] || matchData['Crystal Yang'];

  return (
    <div>
      <Header />
      <div className="conversation-detail">
        <div className="match-header">
          <h1 className="you-matched">YOU MATCHED!</h1>
          <p className="match-subtitle">Your Match is...</p>
          <h2 className="match-name">{match.name}</h2>
        </div>

        <div className="profile-card">
          <div className="profile-image-container">
            <div className="profile-image">
              {match.image ? (
                <img 
                  src={`${process.env.PUBLIC_URL}/images/${match.image}`} 
                  alt={match.name} 
                />
              ) : (
                <div className="profile-placeholder">
                  {match.name.charAt(0)}
                </div>
              )}
            </div>
          </div>
          <div className="profile-details">
            <div className="profile-info">Student at {match.school}</div>
            <div className="profile-info">Age: {match.age} Years old</div>
            <div className="profile-info">City: {match.city}</div>
          </div>
        </div>

        <div className="shared-interest">
          You both read "{match.articleTitle.includes('Risk in') ? (
            <>
              {match.articleTitle.split('Risk in')[0]}Risk in<br />
              {match.articleTitle.split('Risk in')[1] || ''}
            </>
          ) : match.articleTitle}"... but only {match.matchScore}/{match.totalQuestions} of your<br />
          answers matched.
        </div>

        <div className="meet-your-match">
          <h3 className="meet-header">Meet Your Match</h3>
          
          <div className="meet-item">
            <div className="meet-icon who-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="7" r="4" stroke="#FFD700" strokeWidth="2" fill="none"/>
                <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="#FFD700" strokeWidth="2" fill="none"/>
                <circle cx="17" cy="7" r="4" stroke="#FFD700" strokeWidth="2" fill="none"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#FFD700" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="meet-content">
              <div className="meet-label">WHO</div>
              <div className="meet-value">{match.name}</div>
            </div>
          </div>

          <div className="meet-item">
            <div className="meet-icon where-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#FFD700" strokeWidth="2" fill="none"/>
                <circle cx="12" cy="10" r="3" stroke="#FFD700" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="meet-content">
              <div className="meet-label">WHERE</div>
              <div className="meet-value">{match.location}</div>
              {match.address.map((line, index) => (
                <div key={index} className="meet-address-line">{line}</div>
              ))}
            </div>
          </div>

          <div className="meet-item">
            <div className="meet-icon when-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#FFD700" strokeWidth="2" fill="none"/>
                <path d="M12 6v6l4 2" stroke="#FFD700" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="meet-content">
              <div className="meet-label">WHEN</div>
              <div className="meet-value">{match.date}</div>
              <div className="meet-time">{match.time}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConversationDetail;


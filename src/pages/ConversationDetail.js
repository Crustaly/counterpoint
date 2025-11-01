import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import './ConversationDetail.css';

function ConversationDetail() {
  const { matchType, name } = useParams();
  
  const isUpcoming = matchType === 'upcoming';

  return (
    <div>
      <Header />
      <div className="conversation-detail">
        <h1 className="page-title">
          {isUpcoming ? 'Upcoming' : 'Previous'} Conversation with {name}
        </h1>
      <div className="date-placeholder">
        XXX
      </div>
      <div className="content-section">
        <div className="content-image">
          <div className="image-placeholder"></div>
        </div>
        <div className="content-details">
          <h2 className="content-title">The Ultimate Guide to Writing</h2>
          <p className="content-description">
            Read a selection of opinion pieces from world-class journalists.
          </p>
          <div className="content-meta">
            3 days ago | 5 min read
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ConversationDetail;


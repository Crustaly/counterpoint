import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ArticleSelection from './pages/ArticleSelection';
import ArticleView from './pages/ArticleView';
import MyMatches from './pages/MyMatches';
import ConversationDetail from './pages/ConversationDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/article-selection" element={<ArticleSelection />} />
          <Route path="/article-view/:id" element={<ArticleView />} />
          <Route path="/my-matches" element={<MyMatches />} />
          <Route path="/conversation-detail/:matchType/:name" element={<ConversationDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


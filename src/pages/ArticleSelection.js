import React from 'react';
import { useNavigate } from 'react-router-dom';
import { articleData } from './ArticleView';
import Header from '../components/Header';
import './ArticleSelection.css';

function ArticleSelection() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="article-selection">
        <h1 className="page-title">Choose Your Topic</h1>
      <div className="article-list">
        {articleData.map((article) => (
          <div 
            key={article.id} 
            className="article-card"
            onClick={() => navigate(`/article-view/${article.id}`)}
          >
            <div className="article-category">{article.category}</div>
            <div className="article-title">{article.title}</div>
            <div className="article-source">{article.source}</div>
            <div className="article-thumbnail"> 
              <img src={`${process.env.PUBLIC_URL}${article.image}`} alt={article.title} />
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default ArticleSelection;

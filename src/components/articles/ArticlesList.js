import React from 'react';
import ArticleCard from './ArticleCard';

export default function ArticlesList({ articles, onArticleConfirm }) {
  const emptyMessage = (
    <p>There are no articles yet in your collection.</p>
  );

  const articlesList = (
    <div className="ui four cards">
      { 
        articles.map((article, i) => <ArticleCard article={article} key={i} onArticleConfirm={onArticleConfirm}/>)        
      }
    </div>
  );

  return (
    <div>
      {articles.length === 0 ? emptyMessage : articlesList}
    </div>
  );
}

ArticlesList.propTypes = {
  articles: React.PropTypes.array.isRequired,
  onArticleConfirm: React.PropTypes.func.isRequired
}

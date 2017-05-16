import React from 'react';
import { Link } from 'react-router';

export default function ArticleCard({ article,onArticleConfirm }) {
  return (
    <div className="ui card">
      <div className="image">
      {
        article.article_image ? <img src={`files/${article.article_image}`} alt="article Cover" /> : ''
      }
      </div>
      <div className="content">
        <div className="header">{article.article_name}</div>
      </div>
      <div className="extra content">
        <div className="ui two buttons">
          <Link to={`/article/${article.id}`} className="ui basic button green">Edit</Link>
          <div className="ui basic button red" onClick={ () => onArticleConfirm(article.id)}>Delete</div>
        </div>
      </div>
    </div>
  );
}

ArticleCard.propTypes = {
  article: React.PropTypes.object.isRequired,
  onArticleConfirm: React.PropTypes.func.isRequired
}
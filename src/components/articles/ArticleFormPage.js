import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { saveArticle, fetchArticle, updateArticle, 
  fetchArticles } from '../../actions/articleActions';
import ArticleForm from './ArticleForm';

class ArticleFormPage extends React.Component {

  state = {
    redirect: false
  }
  
  componentDidMount() {
    this.props.fetchArticles();
  }

  saveArticle = ({ data, upload_file }) => {
    if (data.id) {
      return this.props.updateArticle({ data, upload_file }).then(
        () => { browserHistory.push('/articles') },
      );
    } else {
      return this.props.saveArticle({ data, upload_file }).then(
        () => { browserHistory.push('/articles') },
      );
    }
  }

  render() {
    return (
      <div>
          <ArticleForm
            article={this.props.article}
            saveArticle={this.saveArticle}
            params={this.props.params}
          />
      </div>
        );
    }
}

function getarticleById(articles, id) {
  let article = articles.find(article => article.id === Number(id))
  return article
}

function mapStateToProps(state, props) {  
  let article = {id: '', article_name: '', article_type: '', article_image: ''}
  if (state.articles.length > 0) { 
    article = getarticleById(state.articles, props.params.id);
  }
  return {article: article}
};

export default connect(mapStateToProps, { 
  saveArticle, fetchArticle, updateArticle, fetchArticles 
})(ArticleFormPage);

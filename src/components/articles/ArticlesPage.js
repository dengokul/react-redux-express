import React from 'react'
import { Link } from 'react-router'
import ArticlesList from './ArticlesList'
import { connect } from 'react-redux'
import { fetchArticles, deleteArticle } from '../../actions/articleActions'
import { showModal, hideModal  } from '../../actions/modalActions'
import ConfirmModal from '../modal/ConfirmModal'

class ArticlesPage extends React.Component {
  componentDidMount() {
    this.props.fetchArticles();
  }

render() {
  let { showModal, onConfirm, hideModal } = this.props
  return (
      <div>

      <div>
        <ConfirmModal message="'What your name?'" onDeleteConfirm={(id) => onConfirm(id)} onCancel={hideModal}></ConfirmModal>
      </div>
    
        <h1 className="title-sec">Articles List <Link to="/articles/new">New Article</Link></h1>
        <ArticlesList articles={this.props.articles} onArticleConfirm={ (index) => showModal(index) } />
        <div>
      </div>

      </div>
    );

  }
}

ArticlesPage.propTypes = {
  articles: React.PropTypes.array.isRequired,
  fetchArticles: React.PropTypes.func.isRequired,
  deleteArticle: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    articles: state.articles
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: (message) => dispatch(showModal(message)),
    onConfirm: (id) => dispatch(deleteArticle(id)),
    hideModal: () => dispatch(hideModal()),
    fetchArticles: () => dispatch(fetchArticles()),
    deleteArticle: (id) => dispatch(deleteArticle(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesPage);

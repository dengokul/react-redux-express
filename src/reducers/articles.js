import { ARTICLES_FETCHED, ADD_ARTICLE, ARTICLE_UPDATED, ARTICLE_DELETED, 
  UPLOAD_REQUEST, UPLOAD_DOCUMENT_SUCCESS, UPLOAD_DOCUMENT_FAIL } from '../actions/articleActions';

export default function articles(state = [], action = {}) {
  switch(action.type) {
    case ADD_ARTICLE:
      return [
        ...state,
        action.article
      ];

    case ARTICLE_UPDATED:
      return state.map(item => {
        if (item.id === action.article.id) return action.article;
        return item;
      });

     case ARTICLE_DELETED:
     return state.filter(item => item.id !== action.articleId)

    /*case ARTICLES_FETCHED:
      const index = state.findIndex(item => item.id === 1);
      if (index > -1) {
        return state.map(item => {
          if (item.id === action.article.id) return action.article;
          return item;
        });
      } else {
        return [
          ...state,
          action.article
        ];
      }*/

    case ARTICLES_FETCHED:
      return action.articles;

    case UPLOAD_REQUEST:
      return true

    case UPLOAD_DOCUMENT_SUCCESS:
      return [
          ...state,
          action.data
        ];
    case UPLOAD_DOCUMENT_FAIL:
     return [
          ...state,
          action.error
        ];
    default: return state;
  }
}
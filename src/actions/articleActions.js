import request from 'superagent-bluebird-promise'

export const ARTICLES_FETCHED = 'ARTICLES_FETCHED';
export const ADD_ARTICLE = 'ADD_ARTICLE';
export const ARTICLE_FETCHED = 'ARTICLE_FETCHED';
export const ARTICLE_UPDATED = 'ARTICLE_UPDATED';
export const ARTICLE_DELETED = 'ARTICLE_DELETED';
export const UPLOAD_REQUEST = 'UPLOAD_REQUEST';
export const UPLOAD_FAILURE = 'UPLOAD_FAILURE';
export const UPLOAD_SUCCESS = 'UPLOAD_SUCCESS';

function handleResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

/*function handleUploadResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}*/

export function articlesFetched(articles) {
  return {
    type: ARTICLES_FETCHED,
    articles
  }
}

export function savedArticle(article) {
  return {
    type: ADD_ARTICLE,
    article
  }
}

export function articleFetched(article) {
  return {
    type: ARTICLE_FETCHED,
    article
  }
}

export function articleUpdated(article) {
  return {
    type: ARTICLE_UPDATED,
    article
  }
}

export function deleteArticleByid(articleId) {
  return {
    type: ARTICLE_DELETED,
    articleId
  }
}

export function uploadRequest() {
  return {
    type: 'UPLOAD_REQUEST',
    data:true,
  };
}

export function uploadSuccess({ data }) {
  return {
    type: 'UPLOAD_DOCUMENT_SUCCESS',
    data,
  };
}

export function uploadFail(error) {
  return {
    type: 'UPLOAD_DOCUMENT_FAIL',
    error,
  };
}

/* Action request to server */
export function saveArticle(data) {
  return dispatch => {
     const fetch_data = fetch('/api/articles', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      });
      return fetch_data.then(handleResponse)
      .then(insData => uploadFile(data.upload_file, insData, insData.article.insertId))
      .then(data => dispatch(savedArticle(data.body.article)));
  }
}

/*export function saveArticleData(data) {
  return dispatch => {
   return fetch('/api/articles', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
    .then(data => dispatch(savedArticle(data.article)));
  }
}*/

export function updateArticle(data) {
  const updateData = data.data;
  return dispatch => {
     const fetch_data = fetch(`/api/articles/${updateData.id}`, {
        method: 'put',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      });
     if(data.upload_file !== '') {
        return fetch_data.then(handleResponse)
        .then(insData => uploadFile(data.upload_file, insData, updateData.id))
        .then(data => dispatch(articleUpdated(data.body.article)));
    } else {
       return fetch_data.then(handleResponse)
        .then(data => dispatch(articleUpdated(data.article)));
    }
  }
}

export function deleteArticle(id) {
  // console.log('aa:'+JSON.stringify(id));
  return dispatch => {
    return fetch(`/api/articles/${id}`, {
      method: 'delete',
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
    .then(data => dispatch(deleteArticleByid(id)));
  }
}

export function fetchArticle(id) {
  return dispatch => {
    fetch(`/api/articles/${id}`)
      .then(res => res.json())
      .then(data => dispatch(articleFetched(data.article)));
  }
}

export function fetchArticles() {
  return dispatch => {
    fetch('/api/articles')
      .then(res => res.json())
      .then(data => dispatch(articlesFetched(data.articles)));
  }
}

function uploadFile(myFile, insData, id) {
  return request.post('/api/articles/upload')
  .field('upload_id', id)
  .field('insData', JSON.stringify(insData))
  .attach('file', myFile, myFile.name)
  // .then(handleUploadResponse(insData))
}


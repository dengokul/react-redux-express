export const SET_GAMES = 'SET_GAMES';
export const ADD_GAME = 'ADD_GAME';
export const GAME_FETCHED = 'GAME_FETCHED';
export const GAME_UPDATED = 'GAME_UPDATED';
export const GAME_DELETED = 'GAME_DELETED';
export const UPLOAD_DOCUMENT_SUCCESS = 'UPLOAD_DOCUMENT_SUCCESS';
export const UPLOAD_DOCUMENT_FAIL = 'UPLOAD_DOCUMENT_FAIL';

function handleResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export function setGames(games) {
  return {
    type: SET_GAMES,
    games
  }
}

export function addGame(game) {
  return {
    type: ADD_GAME,
    game
  }
}

export function gameFetched(game) {
  return {
    type: GAME_FETCHED,
    game
  }
}

export function gameUpdated(game) {
  return {
    type: GAME_UPDATED,
    game
  }
}

export function deleteGameByid(gameId) {
  return {
    type: GAME_DELETED,
    gameId
  }
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
export function saveGame(data) {
  return dispatch => {
    return fetch('/api/games', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
    .then(data => dispatch(addGame(data.game)));
  }
}

export function updateGame(data) {
  return dispatch => {
    return fetch(`/api/games/${data.id}`, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
    .then(data => dispatch(gameUpdated(data.game)));
  }
}

export function deleteGame(id) {
  return dispatch => {
    return fetch(`/api/games/${id}`, {
      method: 'delete',
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
    .then(data => dispatch(deleteGameByid(id)));
  }
}

export function fetchGames() {
  return dispatch => {
    fetch('/api/games')
      .then(res => res.json())
      .then(data => dispatch(setGames(data.games)));
  }
}

export function fetchGame(id) {
  return dispatch => {
    fetch(`/api/games/${id}`)
      .then(res => res.json())
      .then(data => dispatch(gameFetched(data.game)));
  }
}


export function uploadDocumentRequest({ file, name }) {  
  let data = new FormData();
  data.append('file', document);
  data.append('name', name);

   return dispatch => {
    return fetch('/api/games_upload', {
      method: 'post',
      body: data,
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => dispatch(uploadSuccess(response)))
      .catch(error => dispatch(uploadFail(error)));
  }

}

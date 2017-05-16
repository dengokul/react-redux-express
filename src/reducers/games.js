import { SET_GAMES, ADD_GAME, GAME_FETCHED, GAME_UPDATED, GAME_DELETED, UPLOAD_DOCUMENT_SUCCESS, UPLOAD_DOCUMENT_FAIL } from '../actions/gameActions';

export default function games(state = [], action = {}) {
  switch(action.type) {
    case ADD_GAME:
      return [
        ...state,
        action.game
      ];

    case GAME_UPDATED:
      return state.map(item => {
        if (item.id === action.game.id) return action.game;
        return item;
      });

     case GAME_DELETED:
     return state.filter(item => item.id !== action.gameId)

    case GAME_FETCHED:
      const index = state.findIndex(item => item.id === 1);
      if (index > -1) {
        return state.map(item => {
          if (item.id === action.game.id) return action.game;
          return item;
        });
      } else {
        return [
          ...state,
          action.game
        ];
      }

    case SET_GAMES:
      return action.games;


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

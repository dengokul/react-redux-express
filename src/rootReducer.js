import { combineReducers } from 'redux';

import flashMessages from 'reducers/flashMessages';
import auth from 'reducers/auth';
import games from 'reducers/games';
import articles from 'reducers/articles';
import modals from 'reducers/modals';
import users from 'reducers/admin/users';

export default combineReducers({
  flashMessages,
  auth,
  games,
  articles,
  modals,
  users
});
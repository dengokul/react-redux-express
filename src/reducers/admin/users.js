import { FETCHED_USERS, FETCHED_USER_BY_ID, 
	USER_DELETED, EDITED_USER_BY_ID, SAVED_USER, UPDATED_USER } from 'actions/admin/userActions'

export default function (state = [], action = {}) {
	switch(action.type) {
		case FETCHED_USERS :
			return action.users

		case USER_DELETED:
     		return state.filter(item => item.id !== action.id)
     	
     	case FETCHED_USER_BY_ID:
	      const index = state.findIndex(item => item.id === 1);
	      if (index > -1) {
	        return state.map(item => {
	          if (item.id === action.user.id) return action.user;
	          return item;
	        });
	      } else {
	        return [
	          ...state,
	          action.user
	        ];
	      }

     	case EDITED_USER_BY_ID:
	      const index1 = state.findIndex(item => item.id === 1);
	      if (index1 > -1) {
	        return state.map(item => {
	          if (item.id === action.user.id) return action.user;
	          return item;
	        });
	      } else {
	        return [
	          ...state,
	          action.user
	        ];
	      }

	    case SAVED_USER:
	      return [...state, action.user]

	    case UPDATED_USER:
	      return state.map(item => {
	        if (item.id === action.user.id) return action.user;
	        return item;
	      });

		default: return state
	}
}
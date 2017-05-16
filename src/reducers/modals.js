import { SHOW_MODAL, HIDE_MODAL, SET_NAME, MODAL_OPEN, 
  MODAL_CLOSE, VIEW_USER_MODAL_CLOSE, EDIT_USER_MODAL_CLOSE } from '../actions/modalActions'
import { FETCHED_USER_BY_ID, EDITED_USER_BY_ID } from '../actions/admin/userActions'
 
export default function modals(state = {
  isShowing: false,
  isViewUserModalShowing: false,
  isEditUserModalShowing: false,
  message: '',
  delId: '',
  viewId: '',
  eId: ''
}, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return Object.assign({}, state, {
        isShowing: true,
        message: '',
        delId: action.delId
      })
    case HIDE_MODAL:
      return Object.assign({}, state, {
        isShowing: false,
        delId: ''
      })
    case SET_NAME:
      // return action.name
      return Object.assign({}, state, {
        name: action.name
      })
     case MODAL_OPEN:
      return Object.assign({}, state, {
        isShowing: true,
        delId: action.delId
      })
      case MODAL_CLOSE:
      return Object.assign({}, state, {
        isShowing: false,
        delId: ''
      })
      case FETCHED_USER_BY_ID:
      return Object.assign({}, state, {
        isViewUserModalShowing: true,
        viewId: action.user.id
      })
      case EDITED_USER_BY_ID:
      return Object.assign({}, state, {
        isEditUserModalShowing: true,
        eId: action.user.id
      })
      case VIEW_USER_MODAL_CLOSE:
      return Object.assign({}, state, {
        isViewUserModalShowing: false,
        viewId: ''
      })
      case EDIT_USER_MODAL_CLOSE:
      return Object.assign({}, state, {
        isEditUserModalShowing: false,
        eId: ''
      })
    default:
      return state
  }
}
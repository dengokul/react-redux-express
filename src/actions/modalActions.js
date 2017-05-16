export const SHOW_MODAL = 'SHOW_MODAL'
export const HIDE_MODAL = 'HIDE_MODAL'
export const MODAL_OPEN = 'MODAL_OPEN'
export const MODAL_CLOSE = 'MODAL_CLOSE'
export const VIEW_USER_MODAL_CLOSE = 'VIEW_USER_MODAL_CLOSE'
export const EDIT_USER_MODAL_CLOSE = 'EDIT_USER_MODAL_CLOSE'
export const SET_NAME = 'SET_NAME'
 
export function showModal(delId) {
  return {
    type: SHOW_MODAL,
    delId
  }
}
 
export function hideModal() {
  return {
    type: HIDE_MODAL
  }
}

export function setName(name) {
  return {
    type: SET_NAME,
    name
  }
}

export function ModalOpen(delId) {
  return {
    type: MODAL_OPEN,
    delId
  }
}

export function ModalClose() {
  return {
    type: MODAL_CLOSE
  }
}

export function ViewUserModalClose() {
  return {
    type: VIEW_USER_MODAL_CLOSE
  }
}

export function EditUserModalClose() {
  return {
    type: EDIT_USER_MODAL_CLOSE
  }
}

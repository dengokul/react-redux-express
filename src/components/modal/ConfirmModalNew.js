import React from 'react'
import { connect } from 'react-redux'
import { Modal } from 'react-bootstrap'

class ConfirmModal extends React.Component {
  getConfirm(id) {
    this.props.onDeleteConfirm(id).then(this.props.ModalClose)
  }

  render () {
    let { ModalClose, isShowing, delId } = this.props
    return (
      <div>
        <Modal show={isShowing} onHide={() => ModalClose} dialogClassName="confirm-custom-modal">
          <Modal.Body>
          <div className="pop-sec">
            <div className="swal2-icon swal2-warning pulse-warning">!</div>
            <h2>Are you sure?</h2>
            <div className="swal2-content">You wont be able to revert this!</div>
            <button type="button" className="swal2-confirm btn btn-success" onClick={() => this.getConfirm(delId)}>Yes, delete it!</button>
            <button type="button" className="swal2-cancel btn btn-danger" onClick={ () => ModalClose()}>Cancel</button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    isShowing: state.modals.isShowing,
    delId: state.modals.delId
  }
}

export default connect(mapStateToProps)(ConfirmModal)
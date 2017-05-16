import React, { Component } from 'react'
import { connect } from 'react-redux'

class ConfirmModal extends Component {
  render() {
    let { onCancel, isShowing, delId } = this.props

    return (
      <div className="confirm-modal">
        { isShowing &&
          <div>
            <div className="modal-backdrop"></div>
            <div className="confirm-modal-content">
              <span className="confirm-modal-message">Are you sure?</span>
              <button className="btn" onClick={() => this.getConfirm(delId)}>OK</button>
              <button className="btn" onClick={() => onCancel()}>Cancel</button>
            </div>
          </div>
        }
      </div>
    )
  }

  getConfirm(delId) {
    this.props.onDeleteConfirm(delId).then(this.props.onCancel())
  }
}

const mapStateToComponent = (state) => {
  return {
    isShowing: state.modals.isShowing,
    delId: state.modals.delId
  }
}

export default connect(mapStateToComponent)(ConfirmModal)
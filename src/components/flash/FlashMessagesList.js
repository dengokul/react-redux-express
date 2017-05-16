import React from 'react';
import FlashMessage from 'components/flash/FlashMessage';
import { connect } from 'react-redux';
import { deleteFlashMessage } from 'actions/flashMessages';

class FlashMessagesList extends React.Component {
  render() {
    const { messages, deleteFlashMessage } = this.props
    if(messages.length) {
      setTimeout(() => { return deleteFlashMessage(messages[0].id) }, 5000)
    }

    const fMmessages = this.props.messages.map(message =>
      <FlashMessage key={message.id} message={message} deleteFlashMessage={this.props.deleteFlashMessage} />
    );
    return (
      <div>{fMmessages}</div>
    );
  }
}

FlashMessagesList.propTypes = {
  messages: React.PropTypes.array.isRequired,
  deleteFlashMessage: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    messages: state.flashMessages
  }
}

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessagesList);

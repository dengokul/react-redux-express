import React from 'react';
import LoginFormOld from './LoginFormOld';

class LoginPage extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <LoginFormOld />
        </div>
      </div>
    );
  }
}

export default LoginPage;

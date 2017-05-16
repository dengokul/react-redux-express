import React from 'react';
import LeftNavigationBar from 'components/admin/includes/LeftNavigationBar'
// import Footer from './Footer'
// import FlashMessagesList from '../../flash/FlashMessagesList'
// import './'
class Layout extends React.Component {
  render() {
    return (
       <div className="wrapper">
       <LeftNavigationBar />
       {this.props.children}
      </div>
    );
  }
}

export default Layout;
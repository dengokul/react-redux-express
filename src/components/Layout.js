import React from 'react';
import NavigationBar from './NavigationBar'
import FlashMessagesList from './flash/FlashMessagesList'
class Layout extends React.Component {
  render() {
    return ( 
      <div className="jumbotron">
       <NavigationBar />
       <FlashMessagesList />
       {this.props.children}
      </div>
    );
  }
}

export default Layout;
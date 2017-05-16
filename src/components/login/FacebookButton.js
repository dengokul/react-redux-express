import React from 'react';

class FacebookButton extends React.Component {

  componentDidMount() {
    window.fbAsyncInit = function() {
      window.FB.init({
      appId      : '158823931318241',
      cookie     : true,  // enable cookies to allow the server to access
      // the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.1' // use version 2.1
    });
    /* window.FB.getLoginStatus(function(response) {
    this.statusChangeCallback(response);
    }.bind(this));*/
    };
    (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

   socialLogin = (response) => {
      this.props.socialLogin(response)
   }

   testAPI() {
     window.FB.api('/me', {fields:'id,email,first_name,last_name,gender,location'}, function(response) {
      this.socialLogin(response)
     }.bind(this));
   }

   statusChangeCallback = (response) => {
     if (response.status === 'connected') {
       this.testAPI();
     } else if (response.status === 'not_authorized') {
       // please login
     } else {
       // please login
     }
   }

   checkLoginState = () => {
     window.FB.getLoginStatus(function(response) {
       this.statusChangeCallback(response);
     }.bind(this));
   }

   handleClick = () => {
     window.FB.login(function(response) {
      console.log(response)
      this.statusChangeCallback(response);
     }.bind(this));
   }

   render() {
      return (
         <div>
            <a onClick={this.handleClick} className="btn btn-dark btn-lg btn-block no-border mt-15 mb-15" href="#" data-bg-color="#3b5998">Login with facebook</a>
         </div>
      );
   }
}

export default FacebookButton
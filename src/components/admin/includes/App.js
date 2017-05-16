import React from 'react'
import Layout from 'components/admin/includes/Layout'

	// assets css load
import '../../../../public/assets/admin/css/bootstrap.min.css'
import '../../../../public/assets/admin/css/material-dashboard.css'
import '../../../../public/assets/admin/css/demo.css'

class App extends React.Component {

componentWillMount() {
	// assets js load
var $script = require("scriptjs")
$script("/assets/admin/js/perfect-scrollbar.jquery.min.js")
$script("/assets/admin/js/bootstrap.min.js")
$script("/assets/admin/js/material.min.js")
$script("/assets/admin/js/material-dashboard.js")
var loadScript = function(href) {
    var link = document.createElement('link')
    link.rel  = 'stylesheet'
    link.type = 'text/css'
    link.href = href
    link.media = 'all'
    document.head.appendChild(link)
  }
loadScript('http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css')
loadScript('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons')
}



  render() {
    return (
      <div>
      { <Layout children={this.props.children}/> }
      </div>
    );
  }
}

export default App;
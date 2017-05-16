import React from 'react'
import Header from 'components/includes/Header'
import Footer from 'components/includes/Footer'

class App extends React.Component {
	componentDidUpdate() {
		window.scrollTo(0,0)
	}
	render() {  
		return (
		  <div id="wrapper" className="clearfix">
		  	<Header />
		  		{this.props.children}
		  	<Footer />
		  </div>
		);
	}
}

export default App
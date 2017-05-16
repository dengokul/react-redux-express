import React from 'react'
import { isLoggedIn } from 'components/lib/Auth'

class TestPage extends React.Component {
	componentDidMount() {
		console.log(isLoggedIn())
	}
	render() {
		return (
			<div>
			<h1>This is test Page</h1>
			</div>
		)
	}
}
export default TestPage;
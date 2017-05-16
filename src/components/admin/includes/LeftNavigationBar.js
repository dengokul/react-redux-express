import React from 'react'
import {Link} from 'react-router'

class LeftNavigationBar extends React.Component {

	render(){
		return (
			<div>
				
			<div className="sidebar" data-active-color="rose" data-background-color="black" data-image="/assets/admin/img/sidebar-1.jpg">
        
	            <div className="logo">
	                <a href="http://www.creative-tim.com/" className="simple-text">
	                    MST
	                </a>
	            </div>
	            <div className="logo logo-mini">
	                <a href="http://www.creative-tim.com/" className="simple-text">
	                    MST
	                </a>
	            </div>

	            <div className="sidebar-wrapper">
	                
	                <ul className="nav">
	                    <li>
	                         <Link to="/admin" className="left-panel"><i className="material-icons">dashboard</i>
	                            <p>Dashboard</p></Link>
	                    </li>
	                    <li>
	                         <Link to="/admin/users"><i className="material-icons">table</i>
	                            <p>Users</p></Link>
	                    </li>
	                </ul>
	            </div>
	        </div>

			</div>
		)
	}
}
export default LeftNavigationBar;
import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';

const SignupPage = () => {
	return (
		<div>
		  <Nav />
		  <div  className="container">
		    <h1 className="text-center">Signup</h1>
		    <hr />
		    <div className="row">
		    	<div className="col">
		    		<form>
		    			<label>First Name</label>
		    			<input type="text" className="form-control" />
		    			<br />
		    			<label>Last Name</label>
		    			<input type="text" className="form-control" />
		    			<br />
		    			<label>Email</label>
		    			<input type="text" className="form-control" />
		    			<br />
		    			<label>Do You have a Phone Number</label> 
		    			<input type="checkbox" />
		    			<br />
		    			<label>Phone Number</label>
		    			<input type="text" className="form-control" />
		    			<br />
		    			<label>Address</label>
		    			<input type="text" className="form-control" />
		    			<br />
		    			<label>Address 2</label>
		    			<input type="text" className="form-control" />
		    			<br />
		    			<div className="row">
		    				<div className="col">
		    					<label>City</label>
		    					<input type="text" className="form-control" />
		    				</div>
		    				<div className="col">
		    					<label>State</label>
		    					<input type="text" className="form-control" />
		    				</div>
		    				<div className="col">
		    					<label>Country / Region</label>
		    					<input type="text" className="form-control" />
		    				</div>
		    			</div>
		    			<br />
		    			<Link to="/user/contacts"><button className="btn btn-primary">Sign Up</button></Link>
		    		</form>
		    	</div>
		    </div>
	    </div>
	  </div>
	);
};

export default SignupPage;
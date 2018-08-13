import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const SignupPage = () => {
	return (
		<div>
		  <Nav />
		  <div  className="container">
		    <h1 className="text-center">Signup</h1>
		    <hr />
		    <div className="row">
		    	<div className="col">
		    		<Link to="/user/contacts">
		    			<img src="data:image/png;base64,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" />
		    		</Link>
		    		<h4>Login Automatically</h4>
		    	</div>
		    	<div className="col">
		    		<form>
		    			<label>Email</label>
		    			<input type="text" className="form-control" />
		    			<br />
		    			<label>Password</label>
		    			<input type="password" className="form-control" />
		    			<br />
		    			<label>Do You have a Phone Number</label> 
		    			<input type="checkbox" />
		    			<br />
		    			<label>Phone Number</label>
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
	    <Footer />
	  </div>
	);
};

export default SignupPage;
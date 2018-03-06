import React from 'react';
import AdminNav from '../../components/adminNav';

export default () => (
	<div>
		<AdminNav />
	  <div className="container">
	    <h1 className="text-center">Settings</h1>
	    <hr />
	    <div className="row">
	    	<div className="col">
	    		<form>
	    			<label>Application Name</label>
	    			<input type="text" placeholder="Whatsvi" className="form-control" />
	    		</form>
	    	</div>
	    	<div className="col">
	    		<form>
	    			<label>SMS Provider</label>
	    			<input type="text" placeholder="TelemediaX" className="form-control" />
	    		</form>
	    	</div>
	    </div>
	    <hr />
	    <h3 className="text-center">Admin Information</h3>
	    <form>
  			<label>First Name</label>
  			<input type="text" class="form-control" />
  			<br />
  			<label>Last Name</label>
  			<input type="text" class="form-control" />
  			<br />
  			<label>Address</label>
  			<input type="text" class="form-control" />
  			<br />
  			<label>Address 2</label>
  			<input type="text" class="form-control" />
  			<br />
  			<div className="row">
  				<div className="col">
  					<label>City</label>
  					<input type="text" class="form-control" />
  				</div>
  				<div className="col">
  					<label>State</label>
  					<input type="text" class="form-control" />
  				</div>
  				<div className="col">
  					<label>Country / Region</label>
  					<input type="text" class="form-control" />
  				</div>
  			</div>
  			<br />
  			<button className="btn btn-primary">Update Info</button>
  		</form>
	  </div>
  </div>
);
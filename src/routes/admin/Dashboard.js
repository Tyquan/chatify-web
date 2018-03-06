import React from 'react';
import AdminNav from '../../components/adminNav';

export default () => (
	<div>
		<AdminNav />
	  <div className="container">
	    <h1 className="text-center">Dashboard</h1>
	    <hr />
	    <div className="row">
	    	<div className="col">
	    		<h3 className="text-center">Users Count:</h3>
	    		<h4 className="text-center">5</h4>
	    	</div>
	    	<div className="col">
	    		<h3 className="text-center">Groups Count:</h3>
	    		<h4 className="text-center">102</h4>
	    	</div>
	    	<div className="col">
	    		<h3 className="text-center">Messages Count:</h3>
	    		<h4 className="text-center">24</h4>
	    	</div>
	    </div>
	    <br />
	    <div className="row">
	    	<div className="col">
	    		<h3 className="text-center">Latest Users</h3>
	    		<ul>
	    			<li>Jennifer Birth</li>
	    			<li>Anne Nash</li>
	    			<li>John Birth</li>
	    			<li>Corey Hook</li>
	    			<li>Ronald Tanz</li>
	    		</ul>
	    	</div>
	    	<div className="col">
	    		<h3 className="text-center">User Countries</h3>
	    		<ul>
	    			<li>USA</li>
	    			<li>London</li>
	    			<li>USA</li>
	    		</ul>
	    	</div>
	    </div>
	  </div>
  </div>
);
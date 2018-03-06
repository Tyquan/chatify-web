import React from 'react';
import AdminNav from '../../components/AdminNav';

export default () => (
	<div>
		<AdminNav />
	  <div className="container">
	    <h1 className="text-center">Groups</h1>
	    <hr />
	    <table class="table table-striped">
		  <thead>
		    <tr>
		      <th scope="col">#</th>
		      <th scope="col">Group Name</th>
		      <th scope="col"></th>
		      <th scope="col"></th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr>
		      <th scope="row">1</th>
		      <td>Jennifers Group</td>
		      <td><button className="btn btn-success">Show</button></td>
		      <td><button className="btn btn-danger">Delete</button></td>
		    </tr>
		    <tr>
		      <th scope="row">2</th>
		      <td>Ada Group</td>
		      <td><button className="btn btn-success">Show</button></td>
		      <td><button className="btn btn-danger">Delete</button></td>
		    </tr>
		    <tr>
		      <th scope="row">3</th>
		      <td>NYC Mannys</td>
		      <td><button className="btn btn-success">Show</button></td>
		      <td><button className="btn btn-danger">Delete</button></td>
		    </tr>
		    <tr>
		      <th scope="row">4</th>
		      <td>Star Wars</td>
		      <td><button className="btn btn-success">Show</button></td>
		      <td><button className="btn btn-danger">Delete</button></td>
		    </tr>
		    <tr>
		      <th scope="row">5</th>
		      <td>Zombies</td>
		      <td><button className="btn btn-success">Show</button></td>
		      <td><button className="btn btn-danger">Delete</button></td>
		    </tr>
		  </tbody>
		</table>
	  </div>
  </div>
);
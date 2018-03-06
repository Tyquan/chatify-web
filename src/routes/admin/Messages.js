import React from 'react';
import AdminNav from '../../components/AdminNav';

export default () => (
	<div>
		<AdminNav />
	  <div className="container">
	    <h1 className="text-center">Messages</h1>
	    <hr />
	    <table class="table table-striped">
			  <thead>
			    <tr>
			      <th scope="col">#</th>
			      <th scope="col">Title</th>
			      <th scope="col">Date</th>
			      <th scope="col"></th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr>
			      <th scope="row">1</th>
			      <td>Jennifer Message</td>
			      <td>02-07-2018</td>
			      <td><button className="btn btn-danger">Delete</button></td>
			    </tr>
			    <tr>
			      <th scope="row">2</th>
			      <td>Test Message 1</td>
			      <td>02-07-2018</td>
			      <td><button className="btn btn-danger">Delete</button></td>
			    </tr>
			    <tr>
			      <th scope="row">3</th>
			      <td>Test Message 2</td>
			      <td>02-07-2018</td>
			      <td><button className="btn btn-danger">Delete</button></td>
			    </tr>
			    <tr>
			      <th scope="row">4</th>
			      <td>Test Message 3</td>
			      <td>02-07-2018</td>
			      <td><button className="btn btn-danger">Delete</button></td>
			    </tr>
			    <tr>
			      <th scope="row">5</th>
			      <td>Test Message 4</td>
			      <td>02-07-2018</td>
			      <td><button className="btn btn-danger">Delete</button></td>
			    </tr>
			  </tbody>
			</table>
	  </div>
  </div>
);
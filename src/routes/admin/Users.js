import React from 'react';
import AdminNav from '../../components/AdminNav';

export default () => (
  <div>
    <AdminNav />
	  <div className="container">
	    <h1 className="text-center">Users</h1>
	    <hr />
	    <table className="table table-striped">
			  <thead>
			    <tr>
			      <th scope="col">#</th>
			      <th scope="col">First</th>
			      <th scope="col">Last</th>
			      <th scope="col">Phone Number</th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr>
			      <th scope="row">1</th>
			      <td>Jennifer</td>
			      <td>Birth</td>
			      <td>1(917) 384-3726</td>
			    </tr>
			    <tr>
			      <th scope="row">2</th>
			      <td>Anne</td>
			      <td>Nash</td>
			      <td>1(917) 384-3727</td>
			    </tr>
			    <tr>
			      <th scope="row">3</th>
			      <td>John</td>
			      <td>Birth</td>
			      <td>1(917) 384-3728</td>
			    </tr>
			    <tr>
			      <th scope="row">4</th>
			      <td>Corey</td>
			      <td>Hook</td>
			      <td>1(917) 384-3729</td>
			    </tr>
			    <tr>
			      <th scope="row">5</th>
			      <td>Ronald</td>
			      <td>Tanz</td>
			      <td>1(917) 384-3730</td>
			    </tr>
			  </tbody>
			</table>
	  </div>
  </div>
);
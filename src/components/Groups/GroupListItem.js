import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const GroupListItem = ({ id, name }) => (
	<div>
		<Link to={`/user/group/${id}`}>
			<h3>{name}</h3>
		</Link>
		<Link to={`/user/group/edit/${id}`}>
			Edit Group
		</Link>
		<hr />
	</div>
);

export default connect()(GroupListItem);
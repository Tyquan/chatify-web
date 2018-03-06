import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setNameFilter, sortByName } from '../../actions/groupFilters';

const GroupListFilters = (props) => (
	<div>
		<input 
			type="text"
			placeholder="Search for a group"
			className="form-control" 
			value={props.groupFilters.name}
			onChange={(e) => {
				props.dispatch(setNameFilter(e.target.value));
				console.log(props);
			}} 
		/>
		<Link 
			to='/user/addGroups'
		>
			Add New Group
		</Link>
	</div>
);

const mapStateToProps = (state) => {
	console.log(state);
	return {
		groupFilters: state.groupFilters
	};
}

export default connect(mapStateToProps)(GroupListFilters);
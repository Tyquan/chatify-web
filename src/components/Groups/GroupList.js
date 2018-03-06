import React from 'react';
import { connect } from 'react-redux';
import GroupListItem from './GroupListItem';

const GroupList = (props) => (
	<div>
		{props.groups.map((contact) => {
			return <GroupListItem key={group.id} {...group} />
		})}
	</div>
);

const mapStateToProps = (state) => {
	return {
		groups: state.groups,
		groupFilters: state.groupFilters
	};
};

export default connect(mapStateToProps)(GroupList);
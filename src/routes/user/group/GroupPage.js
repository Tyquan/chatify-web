import React from 'react';
import UserNav from '../../../components/UserNav';
import GroupList from '../../../components/Groups/GroupList';
import GroupListFilters from '../../../components/Groups/GroupListFilters';

export default () => (
	<div>
		<UserNav />
		<br />
		<h1 className="text-center">Your Groups</h1>
		<hr />
		<GroupListFilters />
		<GroupList />
	</div>
);
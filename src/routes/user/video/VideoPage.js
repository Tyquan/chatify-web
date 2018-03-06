import React from 'react';
import UserNav from '../../../components/UserNav';
import VideoComponent from '../../../components/Video/Component';
import UserFooter from '../../../components/UserFooter';

export default () => (
	<div>
		<UserNav />
		<hr />
		<VideoComponent />
		<UserFooter />
	</div>
);
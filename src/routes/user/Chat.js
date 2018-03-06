import React from 'react';
import UserNav from '../../components/UserNav';
import Chat from '../../components/Chat/Component';

export default () => (
	<div>
		<UserNav />
	  <div className="container">
	    <Chat />
	  </div>
  </div>
);
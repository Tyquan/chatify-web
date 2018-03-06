import React from 'react';

// pass in props from AlbumDetail.js
const Card = (props) => {
	return (
		// use container style
		<div>
			{props.children}
		</div>
	);
};

export default Card;
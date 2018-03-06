import React from 'react';

// use props as arguement in injection
const Header = (props) => {
	const { textStyle, viewStyle } = styles;
	return (
		<div style={viewStyle}>
			<h1 style={textStyle}>{props.headerText}</h1>
		</div>);
};

const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 20
		},
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		fontSize: 20
	}
};

export default Header;
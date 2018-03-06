import React from 'react';
// import StyleSheet

const Button = ({ onPress, children }) => {
	return (
		<div 
			onClick={onPress}
		>
			<p
			>
				{children}
			</p>
		</div>
	);
};

export default Button;
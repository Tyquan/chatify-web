import React from 'react';

const Input = ({label, placeHolder, value, onChangeText, secureTextEntry}) => {
	const { inputStyle, labelStyle, containerStyle } = styles;
	return (
		<div style={containerStyle}>
			<label style={labelStyle}>{label}</label>
			<input
				placeholder={placeHolder}
				value={value}
				label={label}
				style={inputStyle}
			/>
		</div>
	);
};

const styles = {
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 2
	},
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1
	},
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
};

export default Input;
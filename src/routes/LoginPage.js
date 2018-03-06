import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';
import Nav from '../components/nav';

export const LoginPage = ({startLogin}) => {
	return (
		<div>
			<button onClick={startLogin}>Login</button>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
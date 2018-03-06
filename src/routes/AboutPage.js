import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const AboutPage = () => {
	return (
		<div>
			<Nav />
		  	<div className="container">
		    	<h1 className="text-center">About Us</h1>
		    	<hr />
		  	</div>
		  	<Footer />
	  </div>
	);
};

export default AboutPage;
import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
//import phone from './chat.jpg';

const homeStyle = {
	paddingTop: "100px"
};

const HomePage = () => {
	return (
		<div>
			<Nav />
		  	<div className="container">
		  		<div style={homeStyle}></div>
		    	<div className="row">
		    		<div className="col">
		    			<h3>Simple. Secure. Reliable messaging.</h3>
		    			<h4>With Chatify, you'll get fast, simple, secure messaging and calling for free*, available on phones all over the world.</h4>
		    			<ul>
		    				<li>Android</li>
		    				<li>IOS</li>
		    				<li>Mac or Windows PC</li>
		    			</ul>
		    		</div>
		    		<div className="col">
		    		</div>
		    	</div>
		    	<div style={homeStyle}></div>
		    	<div className="row">
		    		<div className="col">
		    			<h3>Chatify Business App</h3>
		    			<p>Chatify Business is an Android app which is free to download, and was built with the small business owner in mind. With the app, businesses can interact with customers easily by using tools to automate, sort, and quickly respond to messages</p>
		    			<ul>
		    				<li>Android</li>
		    				<li>IOS</li>
		    				<li>Mac or Windows PC</li>
		    			</ul>
		    		</div>
		    		<div className="col">
		    			<h5 className="text-center">End-to-end Encryption</h5>
		    			<h3 className="text-center">Chatify Business App</h3>
		    			<p>Some of your most personal moments are shared on Chatify, which is why we built end-to-end encryption into the latest versions of our app. When end-to-end encrypted, your messages and calls are secured so only you and the person you're communicating with can read or listen to them, and nobody in between, not even Chatify. </p>
		    		</div>
		    	</div>
		  	</div>
		  	<Footer />
	  </div>
	);
};

export default HomePage;
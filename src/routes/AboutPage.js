import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const homeStyle = {
	paddingTop: "100px"
};

const AboutPage = () => {
	return (
		<div>
			<Nav />
		  	<div className="container">
		  		<div style={homeStyle}></div>
		  		<div className="row">
		  			<div className="col">
		  				<h5 className="text-center">Texts</h5>
		  				<h3>Simple, Reliable Messaging</h3>
		  				<p>Message your friends and family for free*. WhatsApp uses your phone's Internet connection to send messages so you can avoid SMS fees.</p>
		  			</div>
		  			<div className="col">
		  				<h5 className="text-center">Group Chat</h5>
		  				<h3>Groups to keep in touch</h3>
		  				<p>Keep in touch with the groups of people that matter the most, like your family or coworkers. With group chats, you can share messages, photos, and videos with up to 256 people at once. You can also name your group, mute or customize notifications, and more.</p>
		  			</div>
		  		</div>
		  		<hr />
		  		<div className="row">
		  			<div className="col">
		  				<h5 className="text-center">WhatsApp Voice and Video Calls</h5>
		  				<h3>Speak Freely</h3>
		  				<p>With voice calls, you can talk to your friends and family for free*, even if they're in another country. And with free* video calls, you can have face-to-face conversations for when voice or text just isn't enough. WhatsApp voice and video calls use your phone's Internet connection, instead of your cell plan's voice minutes, so you don't have to worry about expensive calling charges.</p>
		  			</div>
		  			<div className="col">
		  				<h5 className="text-center">WhatsApp on the Web</h5>
		  				<h3>Keep the Conversation Going</h3>
		  				<p>With WhatsApp on the web and desktop, you can seamlessly sync all of your chats to your computer so that you can chat on whatever device is most convenient for you. Download the desktop app or visit web.whatsapp.com to get started.</p>
		  			</div>
		  		</div>
		  		<hr />
		  		<div className="row">
		  			<div className="col">
		  				<h5 className="text-center">Photos and Videos</h5>
		  				<h3>Share Moments that Matter</h3>
		  				<p>Send photos and videos on WhatsApp instantly. You can even capture the moments that matter to you most with a built-in camera. With WhatsApp, photos and videos send quickly even if you're on a slow connection.</p>
		  			</div>
		  			<div className="col">
		  				<h5 className="text-center">End-to-end encryption</h5>
		  				<h3>Security by Default</h3>
		  				<p>Some of your most personal moments are shared on WhatsApp, which is why we built end-to-end encryption into the latest versions of our app. When end-to-end encrypted, your messages and calls are secured so only you and the person you're communicating with can read or listen to them, and nobody in between, not even WhatsApp.</p>
		  			</div>
		  		</div>
		  		<hr />
		  		<div className="row">
		  			<div className="col">
		  				<h5 className="text-center">Documents</h5>
		  				<h3>Document Sharing Made Easy</h3>
		  				<p>Send PDFs, documents, spreadsheets, slideshows and more, without the hassle of email or file sharing apps. You can send documents up to 100 MB, so it's easy to get what you need over to who you want.</p>
		  			</div>
		  			<div className="col">
		  				<h5 className="text-center">Voice Messages</h5>
		  				<h3>Say What's On Your Mind</h3>
		  				<p>Sometimes, your voice says it all. With just one tap you can record a Voice Message, perfect for a quick hello or a longer story.</p>
		  			</div>
		  		</div>
		  	</div>
		  	<Footer />
	  </div>
	);
};

export default AboutPage;
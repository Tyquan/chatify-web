const path = require('path');
const express = require('express');
const PeerServer = require('peer').PeerServer;
const socket = require('socket.io');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const bcrypt = require('bcrypt');

const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

// mlab connection 
const mongoUri = 'mongodb://Tyquan:Jamela17!@ds139278.mlab.com:39278/whatsvi';
//const mongoUri = 'mongodb://localhost/whatsvi';

//const mongoUri = 'http://localhost/whatsvi'

// mongoose mlab connection
mongoose.connect(mongoUri);
//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const Admin = require('./routes/Admin');
const Contact = require('./routes/Contact');
const Group = require('./routes/Group');
const Message = require('./routes/Message');
const Numbers = require('./routes/Numbers');
const User = require('./routes/User');
//const Videos = require('./public/src/components/Video/Videos.js');

app.use(session({
  secret: 'keysessionsaidding',
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 180 * 60 * 1000 }
}));

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});
app.use('/api/admin', Admin);
app.use('/api/contact', Contact);
app.use('/api/groups', Group);
app.use('/api/messages', Message);
app.use('/api/numbers', Numbers);
app.use('/api/users', User);

const server = app.listen(port, () => {
  console.log(`Server is up! on port ${port}`);
});

const io = socket(server);

// var peerServer = new PeerServer({ port: 9000, path: '/videos' });

// peerServer.on('connection', function (id) {
//   io.emit(Videos.USER_CONNECTED, id);
//   console.log('User connected with #', id);
// });

// peerServer.on('disconnect', function (id) {
//   io.emit(Videos.USER_DISCONNECTED, id);
//   console.log('With #', id, 'user disconnected.');
// });

io.on('connection', (socket) => {
	console.log("Socket Id:", socket.id);

	socket.on('SEND_MESSAGE', (data) => {
		bcrypt.hash(data.message, 10, (err, hash) => {
			//data.message = hash;
			console.log("Sent Message:", data.message);
			console.log("Sent Hash:", hash);
			bcrypt.compare(data.message, hash, (err, res) => {
			  if(res) {
			   // Passwords match
			   console.log("Everythings a Go!");
			   io.emit('RECEIVE_MESSAGE', data);
			  } else {
			   // Passwords don't match
			   console.log("ERROR!!");
			  } 
			});
			
		});
	});
});
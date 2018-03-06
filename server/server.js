const path = require('path');
const express = require('express');
const socket = require('socket.io');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');

const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

// mlab connection 
const mongoUri = 'mongodb://Tyquan:Jamela17!@ds139278.mlab.com:39278/whatsvi';

//const mongoUri = 'http://localhost/whatsvi'

// mongoose mlab connection
mongoose.connect(mongoUri);
//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const Admin = require('./server/routes/Admin');
const Contact = require('./server/routes/Contact');
const Group = require('./server/routes/Group');
const Message = require('./server/routes/Message');
const Numbers = require('./server/routes/Numbers');
const User = require('./server/routes/User');

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
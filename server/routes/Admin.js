const express = require('express');
const mongoose = require('mongoose');
const Admin = require('../models/Admin');
const Salt = 10;
const router = express.Router();

router.route('/')
	.get((req, res) => {
		Admin.find().then((docs) => {
			res.status(200).send({docs: docs});
		}).catch((error) => {
			res.status(404).json(error);
		});
	})
	.post((req, res, next) => {
		let admin = new Admin(req.body);
		// generate a salt
	    bcrypt.genSalt(SALT, function(err, salt) {
	        if (err) return next(err);

	        // hash the password along with our new salt
	        bcrypt.hash(admin.password, salt, function(err, hash) {
	            if (err) return next(err);

	            // override the cleartext password with the hashed one
	            admin.password = hash;
	            admin.save().then((docs) => {
					res.status(200).send({docs: docs});
					next();
				}).catch((error) => {
					res.status(404).json(error);
				});
	        });
	    });
	});

router.route('/:id')
	.get((req, res) => {
		Admin.findById(req.params.id).then((docs) => {
			res.status(200).send({docs: docs});
		}).catch((error) => {
			res.status(404).json(error)
		});
	})
	.put((req, res) => {
		Admin.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, docs) => {
			if (err) {
				throw err;
			} else {
				res.status(200).send({docs: docs});
			}
		})
	})
	.delete((req, res) => {
		Admin.remove({
		    _id: req.params.id
		 }, function(err, admin){
		 	if (err) {
		 		throw err;
		 	} else {
		 		res.status(200).send({ message: 'Admin successfully deleted' });
		 	}
		 });
	});

router.route('/login')
	.post((req, res) => {
		Admin.findOne({
	        username: req.body.username
	    }, (err, user) => {
	        if (err) {
	            throw err;
	        } else {
	            if (!user) {
	                console.log('User not in the databases');
	                res.json({success: false, message: 'User not in the databases'});
	            } else {
	                // check the password
	                bcrypt.compare(req.body.password, user.password, function(err, isMatch) {
				        if (err) return cb(err);
				        console.log('User Found');
	                    console.log();
	                    req.session.admin = user;
	                    res.status(200).send({success: true, docs: user});
				    });
	            }
	        }
	    });
	});


module.exports = router;
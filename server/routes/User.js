const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User');
const router = express.Router();

router.route('/')
	.get((req, res) => {
		User.find().then((docs) => {
			res.status(200).send({docs: docs});
		}).catch((error) => {
			res.status(404).json(error)
		});
	})
	.post((req, res) => {
		let user = new User(req.body);
		user.save().then((docs) => {
			res.status(200).send({docs: docs});
		}).catch((error) => {
			res.status(404).json(error)
		});
	});

router.route('/:id')
	.get((req, res) => {
		User.findById(req.params.id).then((docs) => {
			res.status(200).send({docs: docs});
		}).catch((error) => {
			res.status(404).json(error)
		});
	})
	.put((req, res) => {
		User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, docs) => {
			if (err) {
				throw err;
			} else {
				res.status(200).send({docs: docs});
			}
		})
	})
	.delete((req, res) => {
		User.remove({
		    _id: req.params.id
		 }, function(err, admin){
		 	if (err) {
		 		throw err;
		 	} else {
		 		res.status(200).send({message: 'User successfully deleted' });
		 	}
		 });
	});


module.exports = router;
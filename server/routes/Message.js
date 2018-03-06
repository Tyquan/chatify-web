const express = require('express');
const mongoose = require('mongoose');
const Message = require('../models/Message');
const router = express.Router();

router.route('/')
	.get((req, res) => {
		Message.find().then((docs) => {
			res.status(200).send({docs: docs});
		}).catch((error) => {
			res.status(404).json(error)
		});
	})
	.post((req, res) => {
		let group = new Message(req.body);
		group.save().then((docs) => {
			res.status(200).send({docs: docs});
		}).catch((error) => {
			res.status(404).json(error)
		});
	});

router.route('/:id')
	.get((req, res) => {
		Message.findById(req.params.id).then((docs) => {
			res.status(200).send({docs: docs});
		}).catch((error) => {
			res.status(404).json(error)
		});
	})
	.put((req, res) => {
		Message.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, docs) => {
			if (err) {
				throw err;
			} else {
				res.status(200).send({docs: docs});
			}
		})
	})
	.delete((req, res) => {
		Message.remove({
		    _id: req.params.id
		 }, function(err, admin){
		 	if (err) {
		 		throw err;
		 	} else {
		 		res.status(200).send({ message: 'Task successfully deleted' });
		 	}
		 });
	});


module.exports = router;
const express = require('express');
const mongoose = require('mongoose');
const Contact = require('../models/Contact');
const router = express.Router();

router.route('/')
	.get((req, res) => {
		Contact.find().then((docs) => {
			res.status(200).send({docs: docs});
		}).catch((error) => {
			res.status(404).json(error)
		});
	})
	.post((req, res) => {
		let contact = new Contact(req.body);
		contact.save().then((docs) => {
			res.status(200).send({docs: docs});
		}).catch((error) => {
			res.status(404).json(error)
		});
	});

router.route('/:id')
	.get((req, res) => {
		Contact.findById(req.params.id).then((docs) => {
			res.status(200).send({docs: docs});
		}).catch((error) => {
			res.status(404).json(error)
		});
	})
	.put((req, res) => {
		Contact.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, docs) => {
			if (err) {
				throw err;
			} else {
				res.status(200).send({docs: docs});
			}
		})
	})
	.delete((req, res) => {
		Contact.remove({
		    _id: req.params.id
		 }, function(err, contact){
		 	if (err) {
		 		throw err;
		 	} else {
		 		res.status(200).send({message: 'Task successfully deleted' });
		 	}
		 });
	});


module.exports = router;
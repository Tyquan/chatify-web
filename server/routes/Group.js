const express = require('express');
const mongoose = require('mongoose');
const Group = require('../models/Group');
const router = express.Router();

router.route('/')
	.get((req, res) => {
		Group.find().then((docs) => {
			res.status(200).send({docs: docs});
		}).catch((error) => {
			res.status(404).json(error)
		});
	})
	.post((req, res) => {
		let group = new Group(req.body);
		group.save().then((docs) => {
			res.status(200).send({docs: docs});
		}).catch((error) => {
			res.status(404).json(error)
		});
	});

router.route('/:id')
	.get((req, res) => {
		Group.findById(req.params.id).then((docs) => {
			res.status(200).send({docs: docs});
		}).catch((error) => {
			res.status(404).json(error)
		});
	})
	.put((req, res) => {
		Group.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, docs) => {
			if (err) {
				throw err;
			} else {
				res.status(200).send({docs: docs});
			}
		})
	})
	.delete((req, res) => {
		Group.remove({
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
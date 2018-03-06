const express = require('express');
const mongoose = require('mongoose');
const Numbers = require('../models/Numbers');
const router = express.Router();

router.route('/')
	.get((req, res) => {
		Numbers.find().then((docs) => {
			console.log(docs);
			res.status(200).send({docs: docs});
		}).catch((error) => {
			res.status(404).json(error)
		});
	})
	.post((req, res) => {
		let numbers = new Numbers(req.body);
		numbers.save().then((docs) => {
			res.status(200).send({docs: docs});
		}).catch((error) => {
			res.status(404).json(error)
		});
	});

router.route('/:id')
	.get((req, res) => {
		Numbers.findById(req.params.id).then((docs) => {
			res.status(200).send({docs: docs});
		}).catch((error) => {
			res.status(404).json(error)
		});
	})
	.put((req, res) => {
		Numbers.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, docs) => {
			if (err) {
				throw err;
			} else {
				res.status(200).send({docs: docs});
			}
		})
	})
	.delete((req, res) => {
		Numbers.remove({
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
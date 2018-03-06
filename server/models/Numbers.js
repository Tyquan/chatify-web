const mongoose = require('mongoose');

const NumbersSchema = mongoose.Schema({
    phoneNumber: {
        type: String,
        required: true
    },
    country: {
    	type: String,
        required: true
    },
    code: {
    	type: String,
        required: true
    },
    createDate: {
        type: Date,
        default: Date.now
    }
});

const Numbers = mongoose.model('Numbers', NumbersSchema);

module.exports = Numbers;
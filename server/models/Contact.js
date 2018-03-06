const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String
    },
    lastName: {
        type: String
    },
    address: {
        type: String
    },
    addressTwo: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    country: {
        type: String
    },
    createDate: {
        type: Date,
        default: Date.now
    }
});

const Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;
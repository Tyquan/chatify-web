const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
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
    phoneNumber: {
        type: Number
    },
    isActive: {
        type: Boolean
    },
    availableNumbers: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }],
    users: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }],
    messages: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Message'
    }],
    groups: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Group'
    }],
    friends: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }],
    contacts: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Contact'
    }],
    createDate: {
        type: Date,
        default: Date.now
    }
});

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;
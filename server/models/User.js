const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    username: {
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
    phoneNumber: {
        type: Number
    },
    isActive: {
        type: Boolean
    },
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

const User = mongoose.model('User', userSchema);

module.exports = User;
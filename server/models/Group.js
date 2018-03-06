const mongoose = require('mongoose');

const GroupSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }],
    moderators: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }],
    isActive: {
        type: Boolean
    },
    createDate: {
        type: Date,
        default: Date.now
    }
});

const Group = mongoose.model('Group', GroupSchema);

module.exports = Group;
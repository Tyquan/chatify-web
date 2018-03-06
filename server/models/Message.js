const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    author: { 
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    createDate: {
        type: Date,
        default: Date.now
    }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
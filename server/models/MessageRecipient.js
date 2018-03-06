const mongoose = require('mongoose');

const messageRecipientSchema = mongoose.Schema({
    recipient: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    recipientGroup: {
        type: String
    },
    message: {
        type: String
    },
    isRead: {
        type: Boolean
    }
});

const MessageRecipient = mongoose.model('MessageRecipient', messageRecipientSchema);

module.exports = MessageRecipient;
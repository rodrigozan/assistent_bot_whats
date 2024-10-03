import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true, 
  },
  messages: [
    {
      role: {
        type: String,
        required: true, 
      },
      content: {
        type: String,
        required: true,
      },
      timestamp: {
        type: Date,
        required: true,  
        default: Date.now, 
      },
    },
  ],
});


const MessageModel = mongoose.model('Message', MessageSchema);

export default MessageModel

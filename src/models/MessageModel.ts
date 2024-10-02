import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
  userId: String,
  messages: [
    {
      role: String,
      content: String,
      timestamp: Date,
    },
  ],
});

const MessageModel = mongoose.model('Message', MessageSchema);

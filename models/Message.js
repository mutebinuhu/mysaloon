import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true},
  phoneNumber: { type: String },
  message: { type: String, required:true},


});

export default mongoose.models.Message || mongoose.model('Message', messageSchema);




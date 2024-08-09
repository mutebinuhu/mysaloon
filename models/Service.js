// app/models/Service.js
import mongoose from 'mongoose';

const { Schema } = mongoose;

const serviceSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  specialists: [{
    type: String,
  }]
}, {
  timestamps: true
});

export default mongoose.models.Service || mongoose.model('Service', serviceSchema);


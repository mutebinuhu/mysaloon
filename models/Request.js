import mongoose from 'mongoose';

const requestsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location:{
        type: String 
    },
    phone: {
        type: Number,
        required: true
    },
    service: {
        type: String,
        required: true
    },
    preferredDate: {
        type: Date,
    },
    preferredTime: {
        type: String
    },
    status: {
        type: String,
        default: "new request"
    },
    price:{
        type:Number
    },
    isPaid:{
        type: Boolean,
        default: false
    },
    paymentAcceptedBy:{
        type:String
    }
}, {
    timestamps: true
});

const Request = mongoose.models.Request || mongoose.model('Request', requestsSchema);

export default Request;

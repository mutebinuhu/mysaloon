import mongoose from 'mongoose';

const requestsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
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
    }
}, {
    timestamps: true
});

const Request = mongoose.models.Request || mongoose.model('Request', requestsSchema);

export default Request;

const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const flightSchema = new mongoose.Schema({
    origin: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    flightNumber: {
        type: Number,
        required: true
    },
    depart: {
        type: Date,
        required: true
    },
    arrive: {
        type: Date,
        required: true
    },
    nonstop: {
        type: Boolean,
        default: false
    },
    bookedBy: [{
        type: ObjectId,
        ref: "User"
    }],
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Flight', flightSchema);

const mongoose = require('mongoose');

const ideaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    idea: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type: String,
        enum: ['pending', 'reviewed', 'archived'],
        default: 'pending',
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Idea', ideaSchema);

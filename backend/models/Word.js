const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    date: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        default: 'Entrepreneurship',
    },
    definition: {
        type: String,
        required: true,
    },
    explanation: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        default: '',
    },
    readMoreUrl: {
        type: String,
        default: '',
    },
    example: {
        type: String,
        default: '',
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Word', wordSchema);

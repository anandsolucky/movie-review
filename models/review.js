const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    movieName: {
        type: String,
        required: true,
        trim: true,
    },
    directedBy: {
        type: String,
        required: true,
        trim: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    content: {
        type: String,
        required: true,
        trim: true,
    },
    rating: {
        type: String,
        required: true,
        trim: true,
    },
    genre: {
        type: String,
        required: true,
        trim: true,
    },
})

const review = mongoose.model('review', reviewSchema);
module.exports = review;
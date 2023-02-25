const mongoose = require('mongoose');
const Schema = mongoose.Schema
const mediaSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
}, { timestamps: true })
module.exports = mongoose.model('Media', mediaSchema)


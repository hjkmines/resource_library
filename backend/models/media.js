const mongoose = require('mongoose');


const mediaSchema = new mongoose.Schema({
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


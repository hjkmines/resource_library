const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  url: {
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
}, { 
  timestamps: true 
})

module.exports = mongoose.model('Event', EventSchema)

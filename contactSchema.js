const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true, },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique:true,
   
  },
  company: {
    type: String,
    required: true,
    trim: true,
  },
  jobTitle: {
    type: String,
    required: true, 
    trim: true,
  }
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({ 
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  phone: {
    type: String,
    required: [true, "Phone can't be blank"]
  },
  address: {
    type: String,
    required: [true,"Address can't be blank"]
  },
  notes: {
    type: String  
  }
});

module.exports = mongoose.model('Article', articleSchema); 
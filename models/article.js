const mongoose = require('mongoose');

const orderManagment = new mongoose.Schema({ 
  username: {
    type: String,
    required: [true, "Title is required"]
  },
  address: {
    type: String,
  
  },
  phone: {
    type: String,
  
  },
  quantity: {
    type: Number,
  
  },
  delevieryTime: [
     String
  ],
  delevieryType: [
   String 
  ],
 

},{timestamps:true});

module.exports = mongoose.model('MilkyaCustomers', orderManagment); 
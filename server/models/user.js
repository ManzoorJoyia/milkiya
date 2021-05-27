const mongoose = require('mongoose');
const { default: ShortUniqueId } = require('short-unique-id')
const UserSchema = new mongoose.Schema({ 
 
  name: {
    type: String,
    required: [true, "Title is required"]
  },
  address: {
    type: String,
    required: [true, "Content can't be blank"]
  },
  phone:{
    type: String
  },
  cnic:{
    type:String
  },
  notes:{
    type:String
  },
  createdAt:{
    type:Date,
    default:Date.now
  }
});

module.exports = mongoose.model('User', UserSchema); 
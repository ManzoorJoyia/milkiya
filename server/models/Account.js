const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
  userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User" },
    
    amount:{
    type:Number
    },
    source:{
        type:String
    }
});
module.exports = mongoose.model("Account",AccountSchema);
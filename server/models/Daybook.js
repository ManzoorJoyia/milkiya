const mongoose = require('mongoose');
const Schema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User" },
        account:[{
    amount: {
        type: Number
    },
    detail:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }
}]
});
module.exports = mongoose.model("Daybook",Schema) ;
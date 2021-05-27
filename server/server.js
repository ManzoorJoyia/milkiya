const express = require('express'); 
const mongoose = require('mongoose');
const cors = require('cors');
const user = require('./routes/UserRoute');
const account = require('./routes/Account')
const daybook = require('./routes/DayBook')
const morgan = require("morgan")
const app = express(); 
const PORT = 3001; 
const MONGODB_URI = "mongodb://localhost:27017/Adhat"; 

app.use(cors())
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
app.use('/api', user); 
app.use('/api',account)
app.use('/api',daybook)
app.use(morgan('tiny'));
//databaseconnection
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useFindAndModify: false })
.then(console.log("database connected"))
.catch((err)=>console.log(err))



app.listen(PORT, function() { 
  console.log(`Server listening on port ${PORT}.`);
});
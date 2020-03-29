const express=require('express');
const mongoose = require('mongoose');
require('dotenv').config()
require('./models/url');

//Creating Express Server
const app=express();
var port = process.env.PORT || 8080;
app.listen(port);
console.log('Listening at : '+port);


//Connecting To MongoDB
const connectOptions = {
    keepAlive: true,
    useUnifiedTopology: true, 
    useNewUrlParser: true
  };

  mongoose.Promise = global.Promise;
  mongoose.connect(process.env.DATABASE, connectOptions, (err, db) => {
    if (err) console.log(`Error`, er);
    console.log(`Connected to MongoDB`);
  });

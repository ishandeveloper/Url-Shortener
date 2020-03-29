const express=require('express');

//Creating Express Server
const app=express();
var port = process.env.PORT || 8080;
app.listen(port);
console.log('Listening at : '+port);

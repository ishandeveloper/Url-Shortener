const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
var port = process.env.PORT || 8080;

//Setting Template Engine
app.set('view engine', 'ejs');

//Serving Static Files
app.use('/assets', express.static('assets'));
app.use(bodyParser.json());
app.listen(port, () => {
    console.log("Server Up  → PORT " + port);
});

require("./routes/main")(app);

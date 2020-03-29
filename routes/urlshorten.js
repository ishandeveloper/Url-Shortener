const mongoose = require("mongoose");
const UrlShorten = mongoose.model("UrlShorten");

module.exports = (app) => {
  //GET API for redirecting to Original URL
  app.get("/api/item/:code", async (req, res) => {
   
  });
  //POST API for creating short url from Original URL
  app.post("/api/item", async (req, res) => {
      
  });
};
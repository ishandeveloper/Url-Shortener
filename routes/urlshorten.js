const mongoose = require("mongoose");
const UrlShorten = mongoose.model("UrlShorten");
const validUrl = require("valid-url");
const shortid = require("shortid");
const errorUrl = 'http://localhost/error'


module.exports = (app) => {



    //GET API for redirecting to Original URL
    app.get("/api/item/:code", async (req, res) => {
        const urlCode = req.params.code;
        const item = await UrlShorten.findOne({
            urlCode: urlCode
        });
        if (item) {
            return res.redirect(item.originalUrl);
        } else {
            return res.redirect(errorUrl);
        }
    });



    //POST API for creating short url from Original URL
    app.post("/api/item", async (req, res) => {
        const {
            originalUrl,
            shortBaseUrl
        } = req.body;
        if (validUrl.isUri(shortBaseUrl)) {} else {
            return res
                .status(401)
                .json(
                    "Invalid Base Url"
                );
        }
        const urlCode = shortid.generate();
        const updatedAt = new Date();
        if (validUrl.isUri(originalUrl)) {
            try {
                const item = await UrlShorten.findOne({
                    originalUrl: originalUrl
                });
                if (item) {
                    res.status(200).json(item);
                } else {
                    shortUrl = shortBaseUrl + "/" + urlCode;
                    const item = new UrlShorten({
                        originalUrl,
                        shortUrl,
                        urlCode,
                        updatedAt
                    });
                    await item.save();
                    res.status(200).json(item);
                }
            } catch (err) {
                res.status(401).json("Invalid User Id");
            }
        } else {
            return res
                .status(401)
                .json(
                    "Invalid Original Url"
                );
        }
    });
};

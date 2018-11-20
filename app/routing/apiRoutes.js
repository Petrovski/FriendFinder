var packData = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(packData);
    });

    app.post("/api/friends", function (req, res) {
        packData.push(req.body);
        res.json(true);
    });
    
};
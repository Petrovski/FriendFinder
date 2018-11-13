const express = require("express");
const path = require("path");


module.exports = function (app) {

    app.use(express.static(path.join(__dirname, "../public")))
    app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public", "home.html"))

    })

    app.get("/:path", function (req, res) {

        var getEverything = req.params.path

        if (getEverything === "survey") {

            res.sendFile(path.join(__dirname, "../public", "survey.html"))
            
        } else if (getEverything !== "api/friends") {

            res.sendFile(path.join(__dirname, "../public", "home.html"))
        }
    })
}
const express = require('express');
const app = express();

let ejs = require('ejs');

//route to homepage.ejs
app.get("/", function(req, res) {
    res.render("homepage.ejs");
})

//route to game.ejs
app.get("/game/:gameTitle/:gameCreator", function(req, res) {

    const title = req.params.gameTitle;
    const creator = req.params.gameCreator;


    res.render("game.ejs", {
        gameTitle: title,
        gameCreator: creator
    });
})

app.set('view engine', 'ejs')

app.listen("3000", function() {
    console.log("Website is now online");
})
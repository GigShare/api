const express = require("express");
const app = module.exports = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//setup connection with server
mongoose.connect("mongodb://localhost/gigShareApi", { useNewUrlParser: true });
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
//get all the routes
const artistRoute = require("./routes/artistsRoute");
const genresRoutes = require("./routes/genresRoute");
const usersRoutes = require('./routes/usersRoute');
//when you search for /artist handle response in artist router
app.use("/artists", artistRoute);
//handling genres route
app.use("/genres", genresRoutes);
//handling shit for users by it self
app.use('/users', usersRoutes);

//show endpoints when on homepage
app.get("/", function(req, res) {
    res.status(200).json({
        message: "it works!",
        endPoints: [
            {
                method: "GET",
                endPoints: ["/artists", "/artists/{id}", "/genres", "genres/{id}"]
            },
            {
                method: "POST",
                endPoints: ["/artists", "/genres", "/genres/{id}"]
            },
            {
                method: "Delete",
                endPoints: ["/artists/{id}", "/genres/{id}"]
            },
            {
                method: "PUT",
                endPoints: ["/artists/{id}"]
            }
        ]
    });
});

module.exports = app;

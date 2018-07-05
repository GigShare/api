const express = require('express');
const app = express()
//get all the routes
const artistRoute = require('./routes/artists');
const genresRoutes = require('./routes/genresRoute');
//when you search for /artist handle response in artist router
app.use('/artists' , artistRoute);
//handling genres route
app.use('/genres' , genresRoutes)
//show endpoints when on homepage
app.get('/', function(req, res){
    res.status(200).json({
        message: "it works!",
        endPoints: [
            {
                method: "GET",
                endPoints:[
                    "/artists", 
                    "/artists/{id}",
                    "/genres",
                    "genres/{id}"

                ]
            },
            {
                method: "POST",
                endPoints:[
                    "/artists",
                    "/genres",
                    "/genres/{id}"
                ]
            },
            {
                method: "Delete",
                endPoints:[
                    "/artists/{id}",
                    "/genres/{id}"
                ]
            },
            {
                method: "PUT",
                endPoints:[
                    "/artists/{id}"
                ]
            }
        ]
    });
});

app.listen(process.env.PORT || 8000, () => {
	console.info(`API server is listining on port 8000`)
})

module.exports = app;
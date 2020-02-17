const express = require('express');
const app = (module.exports = express());
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//setup connection with server
mongoose.connect('mongodb://localhost/gigShareApi', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
//get all the routes
const usersRoutes = require('./routes/usersRoute');

//when you search for /artist handle response in artist router
app.use('/users', usersRoutes);

//show endpoints when on homepage
app.get('/', function(req, res) {
    res.status(200).json({
        message: 'it works!',
        endPoints: [
            {
                method: 'GET',
                endPoints: ['/users']
            },
            {
                method: 'POST',
                endPoints: ['/users']
            },
            {
                method: 'Delete',
                endPoints: ['/users/{id}', '/genres/{id}']
            },
            {
                method: 'PUT',
                endPoints: ['/users/{id}']
            }
        ]
    });
});

module.exports = app;

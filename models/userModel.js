const mongoose = require('mongoose'),
    schema = mongoose.Schema;

const usermodel = new schema({
    username:{
        type: String,
        required: true
    },
    artistsID : []
});

module.exports = mongoose.model('User', usermodel);
var mongoose = require('mongoose'),
    schema = mongoose.Schema;

var usermodel = new schema({
    username:{
        type: String 
    },
    artistsID : []
});

module.exports = mongoose.model('User', usermodel);
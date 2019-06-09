var mongoose = require('mongoose'),
    schema = mongoose.Schema;

var usermodel = new schema({
    name:{
        type: String 
    },
    password:{
        type: String 
    },
    artistsID : {
        type: String
    }
});

module.exports = mongoose.model('User', usermodel);
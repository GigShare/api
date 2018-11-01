var mongoose = require('mongoose'),
    schema = mongoose.Schema;

var artistModel = new schema({
    title:{
        type: String 
    },
    genre:{
        type:String 
    }
});

module.exports = mongoose.model('Artist', artistModel);
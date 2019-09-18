var mongoose = require('mongoose'),
    schema = mongoose.Schema;

var artistModel = new schema({
    title:{
        type: String,
        required: true
    },
    genre:{
        type:String,
        required: true
    }
});

module.exports = mongoose.model('Artist', artistModel);
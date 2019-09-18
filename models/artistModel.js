const mongoose = require('mongoose'),
    schema = mongoose.Schema;

const artistModel = new schema({
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
const mongoose = require('mongoose'),
    schema = mongoose.Schema;

const usermodel = new schema({
    username: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', usermodel);

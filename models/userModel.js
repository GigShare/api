const mongoose = require('mongoose'),
    schema = mongoose.Schema;

const usermodel = new schema({
    username: {
        type: String,
        required: true,
    },
    profileImage: {
        type: String,
    },
    groupsIds: [],
    personalArtist: [],
});

module.exports = mongoose.model('User', usermodel);

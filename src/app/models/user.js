const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const user = new Schema({
    username: {type: String, require: true, maxLength: 255},
    email: {type: String, require: true, maxLength: 255},
    password: {type: String, require: true, maxLength: 255}
}, {
    timestamps: true,
});

module.exports = mongoose.model('User', user);
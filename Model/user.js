const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    full_name: String,
    password: String,
    city: String
});

mongoose.model('Users', userSchema);
module.exports = mongoose.model('Users');

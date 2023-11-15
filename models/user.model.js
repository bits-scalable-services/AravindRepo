const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    userId: ObjectId,
    userName: String,
    userTitle: String,
    emailId: String,
    dateOfBirth: String,
    password: String
}, { timestamps: true });

module.exports = mongoose.model('user', userSchema);
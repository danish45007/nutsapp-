const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Messages = Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean
})

module.exports = mongoose.model('message', Messages, "Message")
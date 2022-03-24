const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    class: { type: Number, required: true},
    course: { type: String, required: true }
})

const User = mongoose.model("User", userSchema);


module.exports = User;
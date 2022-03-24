var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: { type: String, required: true },
    bio: { type: String, required: true },
    age: { type: Number, default: 18 },
    email: { type: String, unique: true, required: true, match: /@/ },
    address: { type: String, required: true },
    hobbies: { type: String, required: true },
  },
  { timestamps: true }
);

var User = mongoose.model('User', userSchema);
module.exports = User;
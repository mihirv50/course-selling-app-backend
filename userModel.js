const mongoose = require("mongoose");
const ObjectId = mongoose.ObjectId;

mongoose.connect(`mongodb://127.0.0.1:27017/course-selling-app-database`)

const userSchema = mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
const mongoose = require("mongoose");
const ObjectId = mongoose.ObjectId;

mongoose.connect(`mongodb://127.0.0.1:27017/course-selling-app-database`)

const adminSchema = mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

const adminModel = mongoose.model("admins", adminSchema);

module.exports = adminModel;
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const userModel = require("./userModel");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "randommihir";
const router = express.Router();
const { userRouter } = require("./routes/user");

//MiddleWares
app.use(express.json());

const auth = async (req, res, next) => {
  const { token } = req.headers;
  const response = jwt.verify(token, JWT_SECRET);
  console.log(response);
  if (response) {
  }
};

// User Routs
app.use("/user", userRouter);
//Course Routes


// Admin Routes
app.listen(3000);

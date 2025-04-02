const { Router } = require("express");
const userModel = require("../userModel");

const userRouter = Router();

userRouter.post("/user/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 5);
    await userModel.create({
      name: name,
      email: email,
      password: hashedPassword,
    });
  } catch (error) {
    console.log(error);
  }

  res.json({
    msg: "You are signed up",
  });
});
userRouter.post("/user/signin", async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({
    email: email,
  });
  if (!user) {
    res.status(403).json({
      msg: "Invalid credentials",
    });
  }
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (passwordMatch) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      JWT_SECRET
    );
    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      msg: "Incorrect Credentials",
    });
  }
});
userRouter.post("/user/purchases", (req, res) => {});

module.exports = userRouter;

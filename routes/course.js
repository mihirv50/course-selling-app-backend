const {Router} = require('express');
const courseRouter = Router();

courseRouter.post("/courses/purchase", (req, res) => {});
courseRouter.get("/courses/preview", auth, (req, res) => {});

module.exports = courseRouter;
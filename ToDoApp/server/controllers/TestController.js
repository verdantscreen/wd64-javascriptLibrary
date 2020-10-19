// Controller with one GET request that responds with a message that says "Hello from the test controller"

const { Router } = require("express"); // picks just Router out of express

const testControllerRouter = Router(); // 'new' keyword isn't shown but it is implied

testControllerRouter.get("/", (req, res) => {
  let message = "Hello from test controller!";
  res.send(message);
});

module.exports = testControllerRouter;

let express = require("express"); //1
const { model } = require("../db");
let router = express.Router(); //2
let sequelize = require("../db");
let TestModel = sequelize.import("../models/test");

/***********************
 * Controller Method #1: Simple Response
 * ***************************/

router.get("/helloclient", function (req, res) {
  res.send("This is a message from server to client.");
});

router.post("/one", function (req, res) {
  res.send("Test 1 went through!");
});

router.post("/two", function (req, res) {
  let testData = "Test data for endpoint two";

  TestModel.create({
    testdata: testData,
  }).then((dataFromDatabase) => {
    res.send("Test two went through!");
  });
});

router.post("/three", function (req, res) {
  let testData = req.body.testdata.item;
  TestModel.create({
    testdata: testData,
  });
  res.send("Test three went through!");
  console.log("Test three went through!");
});

router.post("/four", function (req, res) {
  let testData = req.body.testdata.item;
  TestModel.create({
    testdata: testData,
  }).then(function message() {
    res.send("Test 4 went through!");
  });
});

router.post("/five", function (req, res) {
  let testData = req.body.testdata.item;
  TestModel.create({
    testdata: testData,
  }).then(function message(data) {
    res.send(data);
  });
});

router.post("/six", function (req, res) {
  let testData = req.body.testdata.item;
  TestModel.create({
    testdata: testData,
  }).then(function message(testdata) {
    res.json({
      testdata: testdata,
    });
  });
});

module.exports = router;

router.post("/seven", function (req, res) {
  let testData = req.body.testdata.item;
  TestModel.create({
    testdata: testData,
  }).then(
    function createSuccess(testdata) {
      res.json({
        testdata: testdata,
      });
    },
    function createError(err) {
      res.send(500, err.message);
    }
  );
});

router.get("/one", function (req, res) {
  TestModel.findAll({ attributes: ["id", "testdata"] }).then(
    function findAllSuccess(data) {
      console.log("Controller data:", data);
      res.json(data);
    },
    function findAllError(err) {
      res.send(500, err.message);
    }
  );
});

module.exports = router;

/*
//3   //4   //5          //6
router.get("/", function (req, res) {
  //7
  res.send("Hey!!! This is a test route!");
});

router.get("/about", function (req, res) {
  res.send("This is an about route!");
});

module.exports = router;

router.get("/contact", function (req, res) {
  res.send({ user: "kenn", email: "kenn@beastmode.com" });
});

module.exports = router;

router.get("/projects", function (req, res) {
  res.send(["Project 1", "Project 2"]);
});

module.exports = router;

router.get("/mycontacts", function (req, res) {
  res.send([
    { user: "kenn", email: "kenn@beastmode.com" },
    { user: "jenn", email: "jenn@beastmode.com" },
    { user: "sven", email: "sven@beastmode.com" },
  ]);
});

module.exports = router;
*/

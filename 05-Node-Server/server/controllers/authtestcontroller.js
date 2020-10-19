let router = require("express").Router();
let sequelize = require("../db");
let User = sequelize.import("../models/user");
let AuthTestModel = sequelize.import("../models/authtest");

// GET all items for individual user:
router.get("/getall", function (req, res) {
  let userid = req.user.id;
  AuthTestModel.findAll({
    where: { owner: userid },
  }).then(
    function findAllSuccess(data) {
      res.json(data);
    },
    function findAllError(err) {
      res.send(500, err.message);
    }
  );
});

// POST single item for individual user

router.post("/create", function (req, res) {
  let owner = req.user.id;
  let authTestData = req.body.authtestdata.item;
  AuthTestModel.create({
    authtestdata: authTestData,
    owner: owner,
  }).then(
    function createSuccess(authtestdata) {
      res.json({
        authtestdata: authtestdata,
      });
    },
    function createError(err) {
      res.send(500, err.message);
    }
  );
});

// GET single item for individual user
router.get("/:id", function (req, res) {
  let data = req.params.id;
  let userid = req.user.id;

  AuthTestModel.findOne({
    where: { id: data, owner: userid },
  }).then(
    function findOneSuccess(data) {
      res.json(data);
    },
    function findOneError(err) {
      //res.send(500, err.message);
      res.status(500).send(err.message);
    }
  );
});

// DELETE item for individual user

router.delete("/delete/:id", function (req, res) {
  let data = req.params.id;
  let userid = req.user.id;

  AuthTestModel.destroy({
    where: { id: data, owner: userid },
  }).then(
    function deleteLogSuccess(data) {
      res.send("you removed a log");
    },
    function deleteLogError(err) {
      res.send(500, err.message);
    }
  );
});

// UPDATE item for individual user

router.put("/update/:id", function (req, res) {
  let data = req.params.id;
  let authtestdata = req.body.authtestdata.item;
  AuthTestModel.update(
    {
      authtestdata: authtestdata,
    },
    { where: { id: data } }
  ).then(
    function updateSuccess(updatedLog) {
      res.json({
        authtestdata: authtestdata,
      });
    },
    function updateError(err) {
      res.send(500, err.message);
    }
  );
});

module.exports = router;

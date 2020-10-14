require("dotenv").config();

let express = require("express"); //1
let app = express(); //2
let test = require("./controllers/testcontroller");
let user = require("./controllers/usercontroller");
let sequelize = require("./db");

sequelize.sync(); //tip: pass in {force: true} for resetting tables

app.use(express.json());

app.use("/test", test);

app.use("/api/user", user);

//3     //4
app.listen(3000, function () {
  console.log("App is listening on 3000!"); //5
});

/*
app.use("/api/test", function (req, res) {
  res.send("This is data from the /api/test endpoint. It's from the server.");
});*/

//app.use('/api.user', require('./controllers/usercontroller')); instead of line 4 and line 13

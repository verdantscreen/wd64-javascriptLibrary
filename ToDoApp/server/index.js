const Express = require("express"); //require is how we pull in a tool from elsewhere

const applicationSequelizeObject = require("./db");

const applicationControllers = require("./controllers/index");

const expressApplicationObject = new Express(); // holds our express instance (create app's object)

expressApplicationObject.use(Express.json()); //json middlewareto parse the "use the middleware in these parenthesis"

expressApplicationObject.use("/test", applicationControllers.test);
expressApplicationObject.use("/users", applicationControllers.users);

expressApplicationObject.get("/", (request, response) => {
  console.log("[server]: Root GET request received");
  console.log("TYPE:", request.method);
  console.log("URL:", request.url);
  console.log("[server]: Response being dispatched ->");
  response.send("Root Route Hit, hello from the ToDo server");
});

//receive a POST request at the route "/challenge"
// takes 2 values inside the body:
// Name -> string for name
// age -. number for age
//respond w message
// if user 18+ "<name> youre an adult!"
// otherwise "<name>, you will be an adult soon!"

/*valid answer #1
expressApplicationObject.use(Express.json()); //json middlewareto parse the "use the middleware in these parenthesis"
expressApplicationObject.post("/challenge", (request, response) => {
  let name = request.body.name;
  let age = request.body.age;
  if (age >= 18) {
    response.send(`Hi ${name}, you're an adult!`);
  } else {
    response.send(`Hi ${name}, you'll be an adult soon.`);
  }
});*/

// JSON in an request is a string
/*
expressApplicationObject.post("/challenge", (request, response) => {
  let data = request.body;
  let message =
    data.age >= 18
      ? `Hi ${data.name}, you're an adult!`
      : `Hi ${data.name}, you'll be an adult soon.`;
  response.send(message);
});*/

// Startup Procedure:
// 1. verify the connection to the postgres db will work
// 2. run procedure to synchronize our db with our models
// 3. listen on our specified port

applicationSequelizeObject
  .authenticate() // take a moment and verify you can do this
  .then(() => applicationSequelizeObject.sync())
  .then(() => {
    expressApplicationObject.listen(9001, () => {
      // tells it to listen
      console.log("[server]: App is listening on port 9001");
    });
  })
  .catch((err) => {
    console.log(err);
  });

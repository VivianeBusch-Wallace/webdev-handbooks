// by Aghyad Al Logie
const express = require("express"); // importing using old js syntax
const ourServer = express(); // creating an instance of express by invoking it

ourServer.listen(5000, () =>
  console.log("server up and running listening on port 5000")
);

ourServer.get("/", (request, response) => response.send("hello world!!!")); // route using an arrow function

// buidling the 'user' route and through :userid
ourServer.get("/user/:userid", function (req, res) {
  // we can access the userid variable through the req.params.userid
  const usersArr = ["sven", "alina", "viviane", "igal", "iulian"];

  if (req.params.userid < usersArr.length) {
    res.send("logged in user : " + usersArr[req.params.userid]);
  } else {
    res.send(`please enter a number that is smaller than ${usersArr.length}`);
  }
});

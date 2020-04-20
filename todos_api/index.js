const express = require("express");
const app = express();
const port = 8080;
// Body-Parser takes in the Body which is a string, parses it
// and turns it into an object to be used
const bodyParser = require("body-parser");

let todoRoutes = require("./routes/todos");

// These 2 bodyParsers allow access to the request body of a put/post request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serving up static public and views directories with Express
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));



app.get("/", function (req, res) {
  res.sendFile("index.html")
});

// Accessing/using all the routes with a prefix to all routes defined after the second param
app.use("/api/todos", todoRoutes);

app.listen(port, () => console.log(`APP IS RUNNNING ON PORT: ${port}`));

let mongoose = require("mongoose");

// Debug is used to see the code in the Mongo Cli
mongoose.set("debug", true);

// Connect To Server
mongoose.connect("mongodb://localhost/todo-api");
mongoose.Promise = Promise;

module.exports.Todo = require("./todo");

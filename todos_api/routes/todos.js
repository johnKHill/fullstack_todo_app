let express = require("express");
// ---------------------------------------------------
// The Router allows me to break my models into modular chunks
// and to require the routes into the index.js or main app file
let router = express.Router();
// ---------------------------------------------------
// Requiring the Models index directory instead of todo.js because
// index.js is requiring the "Todo model/schema"
let db = require("../models/");
// ---------------------------------------------------
// Maps to the helper folder to make cleaner code
let helpers = require("../helpers/todos");



// ------------------------------------------------------------
// ROUTER ROUTES
// ------------------------------------------------------------

// INDEX(HOME) and  CREATE ROUTE
router.route("/")
  .get(helpers.getTodos)
  .post(helpers.createTodos);

// SHOW (read), UPDATE and DELETE ROUTE
router.route("/:todoId")
  .get(helpers.getTodo)
  .put(helpers.updateTodo)
  .delete(helpers.deleteTodo);

// exporting the router
module.exports = router;

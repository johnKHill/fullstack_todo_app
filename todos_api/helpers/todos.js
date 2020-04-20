// Requiring the Models index directory
let db = require("../models");

// INDEX(HOME)
exports.getTodos = function (req, res) {
  // Mongoose will connect to the db with .find() and will List
  // all todos from the db with a Promise
  db.Todo.find()
    .then(function (todos) {
      res.json(todos);
    })
    .catch(function (err) {
      res.send(err);
    });
};

// CREATE ROUTE
exports.createTodos = function (req, res) {
  // Mongoose takes what is in the request body and insert it into the DB
  db.Todo.create(req.body)
    .then(function (newTodo) {
      // Respond with 201. Something was created with a 201 status code. Send the json also
      res.status(201).json(newTodo);
    })
    .catch(function (err) {
      res.send(err);
    });
};

// SHOW (read) ROUTE
exports.getTodo = function (req, res) {
  // Mongoose will connect to the db with .findById() and will List
  // the foundTodo by that Id from the db with a Promise
  db.Todo.findById(req.params.todoId)
    .then(function (foundTodo) {
      res.send(err);
  });
};

// UPDATE ROUTE
exports.updateTodo = function (req, res) {
  // Mongoose will connect to the db with .findOneAndUpdate() and will List
  // the todo by that _id from the db with a Promise
  // new: true responds with the updated version... not just only in the MongoDB
  db.Todo.findOneAndUpdate({ _id: req.params.todoId }, req.body, { new: true })
    .then(function (todo) {
      res.json(todo);
    })
    .catch(function (err) {
      res.send(err);
    });
};

// DELETE ROUTE
exports.deleteTodo = function (req, res) {
  // Mongoose will connect to the db with .remove() and will List
  // the todo with the _id from the db with a Promise and delete it
  db.Todo.remove({ _id: req.params.todoId })
    .then(function () {
      res.json({ message: "WE DELETED IT!" });
    })
    .catch(function (err) {
      res.send(err);
    });
};

module.export = exports;

let mongoose = require("mongoose");

let todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Name cannot be blank!",
  },
  completed: {
    type: Boolean,
    default: false,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});

// Compile it to a named model for the Schema itself
let Todo = mongoose.model("Todo", todoSchema);

// Exporting the Todo model to be required from this todo.js file.
module.exports = Todo;

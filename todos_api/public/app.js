$(document).ready(function() {
  // Making a request to my own api
  $.getJSON("/api/todos")
  .then(addTodos)

  // Adding event listeners when the page loads
  $("#todoInput").keypress(function(event) {
    if (event.which == 13) {
      createTodo();
    }
  });

  $(".list").on("click", "li", function() {
    updateTodo($(this));
  })

  $(".list").on("click", "span", function(e) {
    e.stopPropagation();
    removeTodo($(this).parent());
  });
});




function addTodos(todos) {
  // add todos to the page
  todos.forEach(function(todo) {
    addTodo(todo);
  });
}
function addTodo(todo) {
  let newTodo = $("<li class='task'>" + todo.name + " <span>X</span></li>");
  // Mongo is storing the _id for the todos. I'm storing it using Jquery
  // mete-data '.data()' to store the _id also
  newTodo.data('id', todo._id);
  newTodo.data("completed", todo.completed);
  if (todo.completed) {
    newTodo.addClass("done");
  }
  $(".list").append(newTodo);
}




function createTodo() {
  // send request to create new todo
  let usrInput = $("#todoInput").val();
  $.post("/api/todos", {name: usrInput})
  .then(function(newTodo) {
    $("#todoInput").val("");
    addTodo(newTodo);
  })
  .catch(function(err) {
    console.log(err);
  })

}




function removeTodo(todo) {
  let clickedId = todo.data("id");
  let deleteUrl = "/api/todos/" + clickedId;
  $.ajax({
    method: "DELETE",
    url: deleteUrl
  })
  .then(function(data) {
    todo.remove();
  })
  .catch(function(err) {
    console.log(err);
  });
}




function updateTodo(todo) {
  let updateUrl = "/api/todos/" + todo.data("id");
  let isDone = !todo.data("completed");
  let updateData = {completed: isDone};
  $.ajax({
    method: "PUT",
    url: updateUrl,
    data: updateData
  })
  .then(function(updatedTodo) {
    todo.toggleClass("done");
    todo.data("completed", isDone);
  });
}
const express = require("express");
const todoController = require("../controller/todo_controller");

const router = express.Router();
router
  .route("/todos")
  .post(todoController.createTodos)
  .get(todoController.readTodos);

router
  .route("/todos/:id")
  .get(todoController.readOneTodo)
  .delete(todoController.deleteOneTodo)
  .patch(todoController.updateOneTodo);

module.exports = router;

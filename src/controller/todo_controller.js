const Todo = require("../model/todo_model");
const mongoose = require("mongoose");

const readTodos = async (req, res) => {
  const data = await Todo.find({});
  res.status(200).send({ status: "Success", data });
};

const readOneTodo = async (req, res) => {
  const data = await Todo.findById(req.params.id);
  if (!data) {
    res.status(404).send({ status: "failed", message: "No todo found" });
    return;
  }
  res.status(200).send({ status: "Success", data });
};

const deleteOneTodo = async (req, res) => {
  const data = await Todo.findByIdAndDelete(req.params.id);
  if (!data) {
    res.status(404).send({ status: "failed", message: "No todo found" });
    return;
  }
  res
    .status(200)
    .send({ status: "Success", message: "Todo deleted successfully" });
};

const updateOneTodo = async (req, res) => {
  try {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["title", "description", "completed"];

    const isValidUpdate = updates.every((e) => allowedUpdates.includes(e));
    if (!isValidUpdate) {
      res.status(400).send({
        status: "failure",
        message: `Is not a valid update. Please update these fields: ${allowedUpdates}`,
      });
      return;
    }

    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      res
        .status(404)
        .send({ status: "failure", message: "No todo found by this id" });
      return;
    }

    updates.forEach((el) => {
      todo[el] = req.body[el];
    });
    await todo.save();
    res.status(200).send({ status: "success", data: todo });
  } catch (e) {
    res.status(400).send({ status: "failure", message: e.message });
  }
};

const createTodos = async (req, res) => {
  console.log(req.body);
  try {
    const todo = new Todo(req.body);
    await todo.save();
    res.status(201).send({ status: "success", data: todo });
  } catch (e) {
    console.log(e);
    res.status(400).send({ status: "failure", message: e.message });
  }
};

module.exports = {
  readTodos,
  createTodos,
  readOneTodo,
  deleteOneTodo,
  updateOneTodo,
};

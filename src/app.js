const express = require("express");
const todoRouter = require("./router/todo_router");
const app = express();
app.use(express.json());
app.use(todoRouter);

module.exports = app;

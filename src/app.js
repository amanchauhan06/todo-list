const express = require("express");
const todoRouters = require("./router/todo_router");
const app = express();
app.use(express.json());
app.use(todoRouters);

module.exports = app;

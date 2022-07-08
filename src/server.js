require("dotenv").config({ path: ".env" });
const mongoose = require("mongoose");
const express = require("express");
const todoRouter = require("./router/todo_router");
const app = express();
app.use(express.json());
app.use(todoRouter);
mongoose
  .connect(process.env.MONGO_DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("successfully connected to database..."))
  .catch((error) => {
    console.log({
      message: "can't connect to database💥💥💥.",
      error,
    });
  });
mongoose.set("debug", true);

app.listen(process.env.PORT || 3000, () => console.log("Server Started"));

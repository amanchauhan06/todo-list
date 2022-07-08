const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "You cannot create a todo without title"],
    validate: function () {
        console.log(this.title);
      if (this.title.length < 20)
        throw new Error("Length should be greater than 20");
    },
  },
});

const Todo = mongoose.model("todo", schema);

module.exports = Todo;

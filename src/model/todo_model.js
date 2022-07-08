const mongoose = require("mongoose");

const schemaOptions = {
  timestamps: true,
};

const schema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "You cannot create a todo without title"],
    validate: function () {
      console.log(this.title);
      if (this.title.length == 0) throw new Error("Title Cannot be empty");
    },
  },
  description: {
    type: String,
    required: true,
    trim: true,
    validate: function () {
      console.log(this.title);
      if (this.description.length < 20)
        throw new Error("Description should be greater than 20");
    },
  },
});

const taskSchema = mongoose.Schema(schema, schemaOptions);
const Todo = mongoose.model("todo", taskSchema);

module.exports = Todo;

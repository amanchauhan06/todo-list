const mongoose = require("mongoose");
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
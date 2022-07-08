require("dotenv").config({ path: ".env" });
require("./db/mongodb");
const app = require('./app');

app.listen(process.env.PORT || 3000, () => console.log("Server Started"));

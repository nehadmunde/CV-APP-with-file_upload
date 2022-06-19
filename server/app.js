const express = require("express");
require("dotenv").config()
const cors = require("cors");
const connectDB = require("./db/connectDB");
const web = require("./router/web");
const port = process.env.PORT || 9014;
const DATABASE_URL = process.env.MONGO || "mongodb://localhost:27017";
const app = express();

app.use(express.static("./router/images"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

connectDB(DATABASE_URL);
// console.log(DATABASE_URL)
app.use("/Api", web);

app.listen(port, () => {
  console.log(`App listning at port http://localhost:${port}`);
});
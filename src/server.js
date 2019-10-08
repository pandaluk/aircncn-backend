const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");

const app = express();

mongoose.connect(
  "mongodb+srv://panda:2hiMtCzm@aircnc-en88k.mongodb.net/aircnc?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json());
app.use(routes);

app.listen(3333);

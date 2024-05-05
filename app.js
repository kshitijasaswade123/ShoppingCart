const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

const app = express();
app.use(express.json());
app.use(cors());
const ShoppingRoute = require('./Route/ShoppingRoute');


app.get('/',(req, res) => {
  res.send("hellloo");
});

app.listen(process.env.port);
app.use('/api/shopping',ShoppingRoute);

async function dbconnection() {
  try {
    const res = await mongoose.connect(process.env.CONNECT);
    const data = await res.default;
    console.log(data.STATES.connected);
  } catch (error) {
    console.log(error.message);
  }
}
dbconnection();

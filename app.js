const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

const app = express();
app.use(express.json());
app.use(cors());
const ShoppingRoute = require('./Route/ShoppingRoute');
const PORT = process.env.port || 5000;

app.get('/', (req, res) => {
  res.send("hellloo");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.use('/api/shopping', ShoppingRoute);

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

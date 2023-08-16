const mongoose = require('mongoose');
require('dotenv').config();
const mongoURI = process.env.mongoURI_Link;

const db = mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connected...');
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = db;

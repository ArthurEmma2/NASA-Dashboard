const mongoose = require("mongoose");
require("dotenv").config();

async function mongoConnect() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connection ready");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }


  
}

async function mongoDisconnect() {
  try {
    await mongoose.disconnect();
  } catch (error) {
    console.error("MongoDB disconnection error:", error);
  }
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};

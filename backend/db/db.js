const mongoose = require("mongoose");
const url = process.env.MONGODB_URL;
const connectDB = async () => {
  try {
    const dbConnect = await mongoose.connect(url);
    if (dbConnect) {
      console.log("Database connected successfully.");
    }
  } catch (error) {
    console.log("Error while connecting to database", error);
    process.exit(0);
  }
};

module.exports = connectDB;

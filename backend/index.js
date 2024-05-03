require("dotenv").config();
const express = require("express");// Importing the Express framework from the package.
const app = express();// Creating an instance of the Express application to utilize its features.s
const port = 3000;
const authRouter = require("./router/auth-router");
const adminRouter=require('./router/admin-router')
const connectDB = require("./db/db");
const errorMiddleware = require("./middlewares/error-middleware");

//middleware
app.use(express.json());

app.use("/auth", authRouter);
app.use("/admin",adminRouter)

app.use(errorMiddleware);

app.listen(port, () => {
  try {
    connectDB();
    console.log(`Server is running at port ${port}`);
  } catch (error) {
    console.log(`Server error`);
  }
});

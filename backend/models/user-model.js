const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  admin: {
    type: Boolean,
    default: false,
  },
});

//bcrypt the passsword before storing to database
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  try {
    const generateSalt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(this.password, generateSalt);
    this.password = hashPassword;
  } catch (error) {
    next(error);
  }
});

//json web token
userSchema.methods.generateToken = async function () {
  //we can create as many methods using userSchema.models
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.admin,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.log("Error in userSchema (json web token)", error);
  }
};

//comparing password for login
userSchema.methods.comparePassword=async function(password){
  try {
    return await bcrypt.compare(password,this.password)
  } catch (error) {
    console.log('Error while compare password during login',error)
  }
};

const User = new mongoose.model("User", userSchema);
module.exports = User;

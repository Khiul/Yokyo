const User = require("../models/user-model");

//register controller
const register = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.json({ err: "User alredy exist" });
    }
    const userCreated = await User.create({ fullname, email, password });
    res.json({
      msg: "Registration successfull",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    console.log("Error in register controller:", error.message);
    res.status(400).json({err:error.message })
  }
};

//login controller
const login = async (req, res) => {
  try {
    const loginData = req.body;
    const userExist = await User.findOne({ email: loginData.email });
    if (!userExist) {
      return res.json({ err: "Invalid credentials" });
    }
    const comparePassword = userExist.comparePassword(loginData.password);
    if (comparePassword) {
      res.json({ msg: "Login successfull",token:await userExist.generateToken(),userId:userExist._id.toString() });
    } else {
      res.json({ err: "Incorrect password" });
    }
  } catch (error) {
    console.log("Error in login controller:", error.message);
  }
};


//user controller to get loginin users data
const user=async(req,res)=>{
try {
  const userData=req.user;
  console.log(userData);
  res.status(200).json({msg:userData})
} catch (error) {
  console.log('Error from the user controller:',error)
}
}


module.exports = { register, login,user };

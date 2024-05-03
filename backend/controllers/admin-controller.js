const User = require("../models/user-model");

const getAllUsers=async(req,res)=>{
const usersData=await User.find({},{password:0})
res.status(200).json({usersData})
console.log({message:'Gets all user data successfully.'})
}
module.exports={getAllUsers};
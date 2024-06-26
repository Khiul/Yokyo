const jwt=require('jsonwebtoken');
const User = require('../models/user-model');

const authMiddleware=async(req,res,next)=>{
    const token=req.header('Authorization');
    if(!token){
     res.status(401).json({message:'Unauthorized HTTP, Token not provided'})
     return console.log({error:'Unauthorized HTTP, Token not provided'})
    }
    const jwtToken=token.replace('Bearer','').trim();
    try {
        const isVerified=jwt.verify(jwtToken,process.env.JWT_SECRET_KEY)
        const userData=await User.findOne({email:isVerified.email}).select({password:0})
        req.user=userData;
        req.token=token;
        req.userData=userData._id;
        next()
    } catch (error) {
        res.status(401).json({message:'Unauthorized HTTP, Invalid token'})
    }
    // return jwt.verify()
}
module.exports=authMiddleware;
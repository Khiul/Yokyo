const adminMiddleware=async(req,res,next)=>{
    try {
        const adminRole=req.user;
        if(adminRole.admin){
            next()
        }else{
        res.status(400).json({error:"Access denied. User is not an admin"});
        return console.log({error:'Access denied. User is not an admin'})
        }     
    } catch (error) {
        next(error)
    }
}
module.exports=adminMiddleware;
const validate=(schema)=>async(req,resp,next)=>{
    try {
        const parseBody=await schema.parseAsync(req.body);
        req.body=parseBody;
        next()
    } catch (err) {
        const status=422;
        const message=err.errors[0].message;
        const error={
            status,message
        }
        console.log({error:message})
        // resp.status(400).json({err:message})
        next(error)
    }
}

module.exports=validate;
const { z } = require("zod");

//Creating an object schema
const signupSchema = z.object({
  fullname: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least of 3 characters" })
    .max(255,{message:'Name cannot be more than 255 characters'}),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .max(255,{message:'Name cannot be more than 255 characters'}),
    password:z
    .string({required_error:'Password is required'})
    .trim()
    .min(5,{message:'Password must be at least 5 characters'})
    .max(1024,{message:'Password cannot be more than 255 characters'})
});


module.exports=signupSchema;
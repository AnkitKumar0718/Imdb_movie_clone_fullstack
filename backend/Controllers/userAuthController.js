const User=require('../Models/users');
const bcryptjs=require('bcryptjs');
const generateTokenandCookie = require('../Utils/token');

async function signup(req,res) { 
    try{
   const {email,password}=req.body;

   if(!email||!password){
   return res.status(400).json({success:false,message:"All fields are required"})
   }

   const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if(!emailRegex.test(email)){
    return res.status(400).json({success:false,message:"Invalid Email"})
   }
   if(password.length<6){
    return res.status(400).json({success:false,message:"Passwords length must be greater than 6"})
   }

 const existingUserByEmail= await User.findOne({email:email})
 if(existingUserByEmail){
   return res.status(400).json({success:false,message:"Email already existed"})
 }

 const hashPassword=await bcryptjs.hash(password,10)

 const newUser=new User({
    email:email,
    password:hashPassword
 })

  generateTokenandCookie(newUser._id,res,) 
  await newUser.save();
  return res.status(201).json({ success: true, message: "User registered successfully" });
}
   catch(error){
   return res.status(500).json({success:false,message:"Internal server error",error:error.message});
}
}


 async function login(req,res) {

   try{
    const {email,password}=req.body;
    if(!email||!password){
      return res.status(400).json({success:false,message:"All fields required"})
    }

    const user= await User.findOne({email:email})
    if(!user){
     return res.status(400).json({success:false,message:"Invalid Email"})
    }
    
    const isPasswordCorrect=await bcryptjs.compare(password,user.password);
    if(!isPasswordCorrect){
      return res.status(400).json({success:false,message:"Invalid Password"})
    }
generateTokenandCookie(user._id,res)
return res.status(200).json({success:true,message:"Login Successfull"})
   }
   catch(error){
      return res.status(500).json({success:false,message:"Internal server error"})
   }
}

 async function logout(req,res) {
    try{
      res.clearCookie("jwt-imdb");
      res.status(200).json({success:true,message:"Logged out successfully"})
    }
    catch(error){
      console.log("error in controller",error.message);
      res.status(400).json({success:false,message:"Internal server error"})
    }
}

module.exports={login,signup,logout}
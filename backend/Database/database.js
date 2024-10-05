const mongoose=require('mongoose');
// const Movie=require('../Models/movie')
// const movies=require('../MovieData/data')
const URI=process.env.MONGO_URI

const connectDB=async()=>{
    try{
        await mongoose.connect(URI);
        console.log('connected');
    }
    catch(error){
     console.log('error',error);
     process.exit(1);
    }
}


module.exports=connectDB;
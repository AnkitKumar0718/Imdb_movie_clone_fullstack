const mongoose=require('mongoose');

const movieSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    overview:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        required:true,
    },
    duration:{
        type:String,
        required:true,
    },
    releaseDate:{
        type:String,
        required:true,
    },
    genre:{
        type:[String],
        required:true,
    },
    poster:{
        type:String,
        required:false
    }
})

module.exports=mongoose.model('Movie',movieSchema)
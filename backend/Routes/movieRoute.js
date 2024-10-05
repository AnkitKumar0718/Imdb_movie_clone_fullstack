const express=require('express');
const { addMovie,getMovies,getMovieDetails, addMultipleMovies, searchMovie}=require('../Controllers/movieController')
const router=express.Router();
const authMiddleware=require('../Middlewares/authentication');

router.post('/addMovies',authMiddleware,addMovie)
router.post('/addMultipleMovies',authMiddleware,addMultipleMovies)
router.get('/movieList',getMovies);
router.get('/details/:id',getMovieDetails);
router.get('/search', searchMovie);

module.exports=router;
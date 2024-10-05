import {configureStore} from '@reduxjs/toolkit';
import movieSlice from '../Features/getPopularMovie/movieSlice';

export const store=configureStore({
    reducer:{
      movieData:movieSlice,
    }
})

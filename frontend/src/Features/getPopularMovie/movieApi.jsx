    import { createAsyncThunk } from '@reduxjs/toolkit';
    import Axios from 'axios';

    export const fetchMovieList = createAsyncThunk('fetchMoviesList', async () => {
        const response = await Axios.get('http://localhost:4000/api/movie/movieList');
        return response.data.data; // Axios automatically parses JSON, so just return response.data.data
    });

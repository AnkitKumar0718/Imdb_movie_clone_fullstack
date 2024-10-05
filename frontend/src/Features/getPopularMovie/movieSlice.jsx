    import { createSlice } from '@reduxjs/toolkit';
    import { fetchMovieList } from './movieApi';

    const initialState = {
        movieList: [],
        loading: false,
        error: null,
    };

    const movieSlice = createSlice({
        name: 'movies',
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(fetchMovieList.pending, (state) => {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(fetchMovieList.fulfilled, (state, action) => {
                    state.loading = false; // Ensure loading is set to false on success
                    state.movieList = action.payload;
                })
                .addCase(fetchMovieList.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.error.message;
                });
        },
    });

    export default movieSlice.reducer;

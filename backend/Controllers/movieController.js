const Movie = require('../Models/movie');

async function addMovie(req,res){
    try {
        const { title } = req.body;
        const existingMovie = await Movie.findOne({ title });
        if (existingMovie) {
            return res.status(400).json({ success: false, message: 'Movie already exists' });
        }
        const movie = new Movie(req.body);
        await movie.save();
        res.status(201).json({ success: true, message: 'Movie added successfully', movie });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to add movie', error: error.message });
    }
}

async function addMultipleMovies(req, res) {
    try {
        const movies = req.body;  // Assume `req.body` is an array of movie objects
        const addedMovies = [];
        const duplicateMovies = [];

        for (const movieData of movies) {
            const { title } = movieData;

            // Check if the movie already exists
            const existingMovie = await Movie.findOne({ title });
            if (existingMovie) {
                duplicateMovies.push(title);  // Track duplicates
                continue;  // Skip to the next movie
            }

            // Create and save the new movie
            const movie = new Movie(movieData);
            await movie.save();
            addedMovies.push(movie);
        }

        if (addedMovies.length === 0) {
            return res.status(400).json({ success: false, message: 'No movies added. All movies already exist.', duplicates: duplicateMovies });
        }

        res.status(201).json({
            success: true,
            message: `Movies added successfully: ${addedMovies.length}`,
            addedMovies,
            duplicateMovies
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to add movies', error: error.message });
    }
}


async function getMovies(req, res) {
    try {
        const movies = await Movie.find();
        console.log("Movies fetched successfully");
        res.status(200).json({ success: true, data: movies });
    } catch (error) {
        console.error("Error fetching movies:", error);
        res.status(500).json({ success: false, message: "Failed to fetch movies", error: error.message });
    }
}

async function getMovieDetails(req, res) {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({ success: false, message: "Movie ID is not provided" });
        }

        const movie = await Movie.findById(id);

        if (!movie) {
            return res.status(404).json({ success: false, message: "Movie not found" });
        }
        res.status(200).json({ success: true, data: movie });
    } catch (error) {
        console.error("Error fetching movie details:", error);
        res.status(500).json({ success: false, message: "Failed to fetch movie details", error: error.message });
    }
}

const deleteMultipleMovies = async (req, res) => {
    try {
        const moviesToDelete = req.body;  // Assume `req.body` is an array of movie titles
        const deletedMovies = [];
        const notFoundMovies = [];

        for (const title of moviesToDelete) {
            // Find and delete the movie by title
            const deletedMovie = await Movie.findOneAndDelete({ title });

            if (deletedMovie) {
                deletedMovies.push(deletedMovie.title);  // Track successfully deleted movies
            } else {
                notFoundMovies.push(title);  // Track movies that were not found in the database
            }
        }

        if (deletedMovies.length === 0) {
            return res.status(404).json({ success: false, message: 'No movies deleted. None of the movies were found.', notFoundMovies });
        }

        res.status(200).json({
            success: true,
            message: `Movies deleted successfully: ${deletedMovies.length}`,
            deletedMovies,
            notFoundMovies
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to delete movies', error: error.message });
    }
};


async function searchMovie(req, res) {
    try {
        // Get the title from the query string
        const { title } = req.query;

        // If no title is provided, return an error
        if (!title) {
            return res.status(400).json({ success: false, message: 'Title query parameter is required' });
        }

        // Search for movies with the provided title (case-insensitive search)
        const movies = await Movie.find({ title: { $regex: title, $options: 'i' } });

        // If no movies found, return a 404 response
        if (movies.length === 0) {
            return res.status(404).json({ success: false, message: 'No movies found with the given title' });
        }

        // Return the found movies
        res.status(200).json({ success: true, movies });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error occurred during search', error: error.message });
    }
}

module.exports = { addMovie,addMultipleMovies, getMovies, getMovieDetails,deleteMultipleMovies,searchMovie };

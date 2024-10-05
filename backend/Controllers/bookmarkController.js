const User = require('../Models/users');
const Movie = require('../Models/movie');


async function addToBookmarks(req, res) {
    try{
        const userId = req.user._id;
        const id = req.params.id;

        const movie = await Movie.findById(id);
        if (!movie) {
            return res.status(404).json({ success: false, message: "Movie not found" });
        }

        const user = await User.findByIdAndUpdate(
            userId,
            { $addToSet: { bookmarks: id } },
            { new: true }
        ).populate('bookmarks');

        return res.status(200).json({ success: true, data: user.bookmarks });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: error.message });
    }
}


// Remove a movie from the user's bookmarks
async function removeFromBookmarks(req, res) {
    try {
        const userId = req.user._id;
        const id = req.params.id;

        const user = await User.findByIdAndUpdate(
            userId,
            { $pull: { bookmarks: id } }, 
            { new: true }
        ).populate('bookmarks');

        return res.status(200).json({ success: true, data: user.bookmarks });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: error.message });
    }
}

// Get the list of bookmarked movies for a user
async function getBookmarks(req, res) {
    try {
        const userId = req.user._id; 
        const user = await User.findById(userId).populate('bookmarks');

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        return res.status(200).json({ success: true, data: user.bookmarks });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: error.message });
    }
}

// Check if the movie is already bookmarked
const checkBookmark = async (req, res) => {
    try {
        const movieId = req.params.id;
        const userId = req.user.id; // Assuming user info is attached to req by the middleware

        // Check if the movie ID exists in the user's bookmarks array
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const exists = user.bookmarks.includes(movieId); // Check if the movieId is in bookmarks

        return res.status(200).json({ exists });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

  

module.exports = { addToBookmarks, removeFromBookmarks,getBookmarks,checkBookmark };

const apiDocumentation = () => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>API Documentation</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 20px;
                    padding: 20px;
                    background-color: #f4f4f4;
                    color: #333;
                }
                h1 {
                    color: #2c3e50;
                }
                h2 {
                    color: #2980b9;
                }
                ul {
                    list-style-type: none;
                    padding: 0;
                }
                li {
                    margin: 10px 0;
                    background: #ecf0f1;
                    padding: 10px;
                    border-radius: 5px;
                }
                code {
                    background: #34495e;
                    color: #ecf0f1;
                    padding: 2px 4px;
                    border-radius: 4px;
                }
            </style>
        </head>
        <body>
            <h1>Welcome to MovieDatabase API</h1>
            <p>Here are the available API endpoints:</p>
            <h2>Authentication</h2>
            <ul>
                <li><strong>POST</strong> <code>/api/auth/signup</code> - Sign up a new user</li>
                <li><strong>POST</strong> <code>/api/auth/login</code> - Log in a user</li>
                <li><strong>POST</strong> <code>/api/auth/logout</code> - Log out the current user</li>
            </ul>
            <h2>Movies</h2>
            <ul>
                <li><strong>POST</strong> <code>/api/movie/addMovies</code> - Add a single movie (authentication required)</li>
                <li><strong>POST</strong> <code>/api/movie/addMultipleMovies</code> - Add multiple movies (authentication required)</li>
                <li><strong>GET</strong> <code>/api/movie/movieList</code> - Retrieve a list of movies</li>
                <li><strong>GET</strong> <code>/api/movie/details/:id</code> - Retrieve details of a specific movie</li>
                <li><strong>GET</strong> <code>/api/movie/search</code> - Search for a movie</li>
            </ul>
            <h2>Bookmarks</h2>
            <ul>
                <li><strong>POST</strong> <code>/api/addBookmarks/:id</code> - Add a bookmark for a movie (authentication required)</li>
                <li><strong>DELETE</strong> <code>/api/removeBookmarks/:id</code> - Remove a bookmark for a movie (authentication required)</li>
                <li><strong>GET</strong> <code>/api/bookmark</code> - Retrieve all bookmarks (authentication required)</li>
                <li><strong>GET</strong> <code>/api/checkBookmark/:id</code> - Check if a movie is bookmarked (authentication required)</li>
            </ul>
        </body>
        </html>
    `;
};

module.exports = apiDocumentation;

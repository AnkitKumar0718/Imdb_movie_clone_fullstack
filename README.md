# IMDb Movie App

## 🙌 Introduction

IMDb  is a full stack application that allows users to browse various movies, view their details, and add them to a wishlist for future viewing.

![Alt text](frontend/public/Images/imdb_thumbnail.png)

## Features

- Responsive Design: The app is fully responsive, providing an optimal user experience across all devices.
- Search Functionality: Search for movies and web series.
- Authentication: Jwt authentication for user login and signup.
- State Management: Managed using Redux Toolkit.
- Icons: Integrated with React Icons for a modern look.
- Routing: Utilizes React Router DOM for seamless navigation between different pages.

  ## Technologies Used

- React: JavaScript library for building user interfaces.
- Tailwind CSS: Utility-first CSS framework for styling.
- Nodejs and Jwt: Authentication and backend integration.
- Redux Toolkit: State management for handling app-wide state.
- React Icons: Icon set for visual enhancement.
- React Router DOM: Routing for navigation between components.
- HTML5: For structuring web content.

  ## Here are the available API endpoints:

#### Authentication:
POST /api/auth/signup - Sign up a new user

POST /api/auth/login - Log in a user

POST /api/auth/logout - Log out the current user

#### Movies:
POST /api/movie/addMovies - Add a single movie (authentication required)

POST /api/movie/addMultipleMovies - Add multiple movies (authentication required)

GET /api/movie/movieList - Retrieve a list of movies

GET /api/movie/details/:id - Retrieve details of a specific movie

GET /api/movie/search - Search for a movie

#### Bookmarks:
POST /api/addBookmarks/:id - Add a bookmark for a movie (authentication required)

DELETE /api/removeBookmarks/:id - Remove a bookmark for a movie (authentication required)

GET /api/bookmark - Retrieve all bookmarks (authentication required)

GET /api/checkBookmark/:id - Check if a movie is bookmarked (authentication required)

## ❓ How To Use

1. Fork this repository

2. Clone your repository (do not forget to add your account name):
   bash
   $ git clone https://github.com/[YOUR ACCOUNT NAME]/.

3. Go into the repository and install dependencies:
   bash

4. $ npm install


## Deployment Link

https://ankit-imdb-clone7788.netlify.app/

https://backend-imdb-database.onrender.com/


## Author

Ankit Kumar

## Email

ankitchauhandhoni@gmail.com


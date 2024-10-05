import React, { useEffect, useState } from 'react';
import { FaPlay } from "react-icons/fa";    
import { BiSolidBookmarkPlus } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Card = ({ movie }) => {
  const navigate = useNavigate();

  // Check if the user is authenticated by checking if token exists in cookies/local storage
  const isAuthenticated = () => {
    return document.cookie.includes('token'); // Check for JWT token in cookies (example)
  }

  async function toggleWishlist() {
    if (!isAuthenticated()) {
      // If user is not authenticated, navigate to the signup page
      alert('You need to sign up or log in to add to wishlist.');
      return navigate('/signup');
    }

    try {
      const isBookmarked = await axios.get(`http://localhost:4000/api/checkBookmark/${movie._id}`, {
        withCredentials: true // Send cookies with the request
      });
  
      let response;
      if (isBookmarked.data.exists) {
        response = await axios.delete(`http://localhost:4000/api/removeBookmarks/${movie._id}`, {
          withCredentials: true
        });
        alert('Removed from wishlist');
      } else {
        response = await axios.post(`http://localhost:4000/api/addBookmarks/${movie._id}`, {}, {
          withCredentials: true
        });
        alert('Added to wishlist');
      }
  
    } catch (error) {
      console.error('Error toggling wishlist:', error);
    }
  }

  const imageUrl = movie.poster ? movie.poster : "https://via.placeholder.com/280x400?text=Image+Not+Available";

  return (
    <div className='relative group ml-10 md:ml-0 h-[320px] w-[280px] md:h-[400px] md:w-full rounded-lg overflow-hidden mb-4'>
      <img
        className='w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105'
        src={imageUrl}
        alt={movie.title || 'Movie Thumbnail'}
        onError={(e) => { 
          e.target.onerror = null; 
          e.target.src = "https://via.placeholder.com/280x400?text=Image+Not+Available"; 
        }}
      />

      <div onClick={toggleWishlist} className='absolute top-0 left-0 cursor-pointer p-2 z-10'>
        <BiSolidBookmarkPlus className='text-white h-8 w-8' />
      </div>

      <Link to={`/details/${movie._id}`}>
        <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          <div className='bg-yellow-400 rounded-full p-4 cursor-pointer'>
            <FaPlay className='text-black text-xl' />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;

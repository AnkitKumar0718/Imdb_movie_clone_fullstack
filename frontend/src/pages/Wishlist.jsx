import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card'; // Assuming you have the Card component available

const Wishlist = () => {
  const [wishlistMovies, setWishlistMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/bookmark', {
          withCredentials: true, // Important to send cookies with the request
        });
        setWishlistMovies(response.data.data); // Corrected to access data
      } catch (error) {
        console.error('Error fetching wishlist:', error);
      }
    };

    fetchWishlist();
  }, [navigate]);

  return (
    <div className="bg-[#121212] h-screen">
      <h2 className='text-white font-bold text-[28px] mb-6 ml-4'>Your Wishlist</h2>
      {wishlistMovies.length > 0 ? (
        <div className="md:grid md:grid-cols-4 gap-4 bg-[#121212]">
          {wishlistMovies.map((movie) => (
            <Card key={movie._id} movie={movie} /> // Ensure correct id
          ))}
        </div>
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default Wishlist;

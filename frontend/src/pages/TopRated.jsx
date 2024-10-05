import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Axios from 'axios';

const TopRated = () => {
  const [movieList, setMovieList] = useState([]); // State to store movie list
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await Axios.get('http://localhost:4000/api/movie/movieList'); // API call to fetch movies
        setMovieList(response.data.data); // Assuming response.data.data contains the movie array
        setLoading(false); // Set loading to false after data is fetched
      } catch (err) {
        setError(err.message); // Capture any error that occurs
        setLoading(false); // Set loading to false on error
      }
    };

    fetchMovies(); // Call the fetch function
  }, []); // Empty dependency array means this runs once on mount

  if (loading) return <p className="text-white">Loading.....</p>; // Show loading
  if (error) return <p className="text-white">Error: {error}</p>; // Show error message

  return (
    <section className="bg-[#121212] mt-4">
      <div className="flex mt-2 ml-4">
        <div className="h-8 ml-2 mr-2 border-l-4 rounded mt-2 border-yellow-400 md:block"></div>
        <h1 className="text-2xl font-bold text-white mt-2 mb-6">Top 10 on IMDb this week</h1>
      </div>
      {/* Splide Component for Movies Carousel */}
      <Splide
        options={{
          type: 'loop',
          perPage: 5,
          perMove: 1,
          gap: '1rem',
          swipe: true,
          drag: true,
          snap: true,
          arrows: true,
          pagination: false,
          autoplay: true,
          flickPower: 500,
          breakpoints: {
            1280: {
              perPage: 4,
            },
            1024: {
              perPage: 3,
            },
            768: {
              perPage: 2,
            },
            640: {
              perPage: 2,
            },
            480: {
              perPage: 1,
            },
          },
        }}
      >
        {movieList.map((movie) => (
          <SplideSlide key={movie.id}> {/* Use id for the key */}
            <Card movie={movie} /> {/* Pass the whole movie object to the Card component */}
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default TopRated;

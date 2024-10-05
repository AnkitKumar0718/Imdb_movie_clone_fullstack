import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Card from '../components/Card';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const NowPlaying = () => {
  const [nowPlayMovie, setNowPlayMovie] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await Axios.get('http://localhost:4000/api/movie/movieList'); // API call to fetch movies
        setNowPlayMovie(response.data.data); // Assuming response.data.data contains the movie array
        setLoading(false); // Set loading to false after data is fetched
      } catch (err) {
        setError(err.message); // Capture any error that occurs
        setLoading(false); // Set loading to false on error
      }
    };
    fetchMovies(); // Call the fetch function
  }, []);

  if (loading) return <p className="text-white">Loading.....</p>; // Show loading
  if (error) return <p className="text-white">Error: {error}</p>; // Show error message

  return (
    <section className='bg-[#121212] mt-4'>
      <div className='flex mt-4 ml-4'>
          <div className="h-8 ml-2 mr-2 border-l-4 rounded mt-2 border-yellow-400 md:block"></div>
        <h1 className='text-2xl font-bold text-white mt-2 mb-6'>NowPlaying</h1>
        </div>
      {/* Splide Component for Movies Carousel */}
      <Splide
        options={{
          type: 'loop',
          perPage: 4,  // Show 4 movies side by side on large screens
          perMove: 1,
          gap: '1rem',
          arrows: true,
          pagination: false,
          autoplay: true,
          breakpoints: {
            1024: {
              perPage: 3,  // Show 3 movies side by side on medium screens
            },
            768: {
              perPage: 2,  // Show 2 movies side by side on small screens
            },
            640: {
              perPage: 1,  // Show 1 movie side by side on very small screens
            },
          },
        }}
      >
        {nowPlayMovie.map((movie) => (
          <SplideSlide key={movie.id}>
            <Card movie={movie} />
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default NowPlaying;

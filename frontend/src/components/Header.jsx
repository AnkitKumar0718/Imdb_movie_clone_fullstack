import React, { useState, useEffect } from 'react';
import { fetchMovieList } from '../Features/getPopularMovie/movieApi';
import { useDispatch, useSelector } from 'react-redux';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
    const dispatch = useDispatch();
    const { movieList, loading, error } = useSelector((state) => state.movieData); // Destructure movieList, loading, and error

    useEffect(() => {
        dispatch(fetchMovieList());
    }, [dispatch]);

    if (loading) return <p className="text-white">Loading.....</p>; // Show loading
    if (error) return <p className="text-white">Error: {error}</p>; // Show error

    return (
        <Splide
            options={{
                type: 'loop',
                perPage: 1,
                gap: '1rem',
                arrows: true,
                pagination: false,
                autoplay: true,
                interval: 3000,
                pauseOnHover: true,
                resetProgress: false,
                breakpoints: {
                    1024: {
                        perPage: 1,
                        gap: '1rem',
                    },
                    768: {
                        perPage: 1,
                        gap: '0.5rem',
                    },
                },
            }}
        >
            {movieList.map((movie) => (
                <SplideSlide key={movie._id}>
                    <Link to={`/details/${movie._id}`}>
                        <div className="md:w-[80%] md:mx-28 md:mr-8 w-full px- relative mt-2">
                            <img
                                className="w-full h-[450px]  md:h-[500px] md:w-[1200px]"
                                src={movie.poster}
                                alt={movie.title}
                            />
                            <div className="absolute bg-black bg-opacity-40 bottom-0 left-0 right-0 p-4 md:p-8">
                                <h1 className="text-white font-bold text-[18px] md:text-[25px] mb-2">
                                    {movie.title}
                                </h1>
                                <p className="text-white mb-4 w-full md:w-3/4">{movie.overview}</p>
                                <div className="bg-white hover:bg-yellow-400 cursor-pointer rounded-full p-2 inline-flex items-center justify-center">
                                    <FaPlay className="text-black text-xl" />
                                </div>
                            </div>
                        </div>
                    </Link>
                </SplideSlide>
            ))}
        </Splide>
    );
};

export default Header;

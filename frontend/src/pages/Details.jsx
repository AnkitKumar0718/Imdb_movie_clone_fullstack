import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

const MovieDetails = () => {
  const { id } = useParams();
  const [currentMovieDetail, setCurrentMovieDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await Axios.get(`http://localhost:4000/api/movie/details/${id}`);
        console.log(response.data); // Log the response data
        if (response.data.success) {
          setCurrentMovieDetail(response.data.data); // Directly set the data object
        } else {
          setError("Movie not found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieDetails();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="w-full min-h-screen relative flex flex-col items-center text-white bg-[#121212]">
      <div className="w-full sm:w-4/5">
        <img
          className="w-full h-[300px] sm:h-[500px] object-cover object-[0_35%]"
          src={currentMovieDetail.poster}
          alt="Backdrop"
        />
      </div>
      <div className="w-full sm:w-3/4 flex flex-col sm:flex-row absolute mt-20 sm:mt-80 px-4 sm:px-0">
        <div className="mr-0 sm:mr-8 mb-8 sm:mb-0">
          <div className="rounded-md shadow-lg">
            <img
              className="w-[120px] sm:w-[180px] rounded-lg shadow-[rgba(0,0,0,0.86)_0px_22px_40px_6px]"
              src={currentMovieDetail.poster}
              alt="Poster"
            />
          </div>
        </div>
        <div className="text-white flex md:bg-black rounded-xl p-2 md:bg-opacity-20 flex-col justify-between md:h-[260px] sm:h-[450px]">
          <div>
            <div className="text-2xl sm:text-4xl font-semibold mb-2">
              {currentMovieDetail.title}
            </div>
            <div className="mb-2 text-sm sm:text-base">
              {currentMovieDetail.overview}
            </div>
            <div className="mb-2 text-sm sm:text-base">
              {currentMovieDetail.duration}
            </div>
            <div className="mb-4 text-sm sm:text-base">
              {`Release date: ${currentMovieDetail.releaseDate}`}
            </div>
            <div className="flex space-x-2 sm:space-x-4 flex-wrap">
              {currentMovieDetail.genre &&
                currentMovieDetail.genre.map((genre, index) => (
                  <span
                    key={index}
                    className="px-2 sm:px-4 py-1 border-2 border-white rounded-full text-sm sm:text-base"
                  >
                    {genre}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#121212] mt-[160px] sm:mt-[90px] py-8 px-4">
        <div className="w-full sm:w-3/4 mx-auto">
          <div className="text-lg sm:text-xl md:mt-[-28px] mt-[-100px] font-semibold mb-8">Synopsis</div>
          <div className="text-sm sm:text-base md:mb-0 md:mt-[-20px] mt-[-20px]">
            {currentMovieDetail.overview}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2"; // Import your second Navbar
import axios from "axios";

function Searched() {
  const { title } = useParams(); // Extracting the search query (movie title) from the URL
  const [searchedMovie, setSearchedMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // New state for authentication

  // Function to check user authentication
  const checkAuthentication = () => {
    // Implement your authentication logic here.
    // For example, check if a token exists in local storage:
    const token = localStorage.getItem("jwt-token");
    setIsAuthenticated(!!token); // Set to true if token exists
  };

  useEffect(() => {
    checkAuthentication(); // Check authentication when component mounts
  }, []);

  useEffect(() => {
    const fetchSearchedMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`http://localhost:4000/api/movie/search?title=${title}`);
        setSearchedMovie(response.data.movies);
      } catch (err) {
        setError(err.response?.data?.message || "Error fetching movies.");
      } finally {
        setLoading(false);
      }
    };

    fetchSearchedMovies();
  }, [title]);

  return (
    <div className="bg-[#121212]">
      {/* Show both Navbars if authenticated, only Navbar if not */}
      {isAuthenticated ? <Navbar2 /> : <Navbar />}

      <section className="md:px-8 md:my-4">
        <h1 className="md:text-4xl text-2xl ml-8 font-bold text-mono text-white">
          Search results for "{title}"
        </h1>

        {/* Show loading, error, or results */}
        {loading && <p className="text-white ml-8">Loading...</p>}
        {error && <p className="text-red-500 ml-8">Error: {error}</p>}
        {!loading && !error && searchedMovie.length === 0 && (
          <p className="text-white ml-8">No results found.</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mt-4">
          {searchedMovie.length > 0 &&
            searchedMovie.map((movie) => {
              return <Card key={movie._id} movie={movie} />;
            })}
        </div>
      </section>
    </div>
  );
}

export default Searched;

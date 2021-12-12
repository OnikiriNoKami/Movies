import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import './trendingContainer.css';
import { getTrendingMovieWeek } from "../../../api/getTrending";
import { trendingSelectMovies } from "../../../redux/reducers/trending/trendingSelector";
import MovieCard from "../card/movieCard/MovieCard";
export default function TrendingContainer() {
  const dispatch = useDispatch();
  const movies = useSelector(trendingSelectMovies);

  const fetchMovies = async () => {
    dispatch(getTrendingMovieWeek());
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div className='trending-container'>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

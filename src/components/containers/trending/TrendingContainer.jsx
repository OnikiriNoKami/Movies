import {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { getTrendingMovieWeek } from '../../../api/getTrending'
export default function TrendingContainer() {
  const dispatch = useDispatch();

  const fetchMovies = async () => {
    dispatch(getTrendingMovieWeek())
  }
  useEffect(()=>{
    fetchMovies()
  }, [])
  return (
    <div>
      Trending container
    </div>
  )
}

import './movieCard.css';

export default function MovieCard({movie}) {
  movie = {
    title: 'Some random title',
    overview: 'After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.',
    popularity: 2555,
    vote_count: 2000,
    vote_average: 7.7,
  }
  // title, poster_path, vote_average, vote_count, popularity, overview, id
  return (
    <div className="card-movie" style={{backgroundImage:`url(https://i.pinimg.com/564x/3d/92/2f/3d922fe56bb8a9bd534850c7fe22f48a.jpg)`}}>
      <div className="card-movie-content">
        <h2 className="card-movie-title">{movie.title}</h2>
        <p className="card-movie-text">{movie.overview}</p>
        <div className="card-movie-votes-container">
          Popularity <span className="movie-score">{movie.popularity}</span>
          Votes <span className="movie-score">{movie.vote_count}</span>
          Average <span className="movie-score">{movie.vote_average}</span>
        </div>
        <a href="#" className="card-movie-button">Details</a>
      </div>
    </div>
  )
}

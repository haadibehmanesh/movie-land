const MovieCard = ({ movie }) => {
    return (
        <div className="container">
            <div className="movie">
                <div>
                    <span>{movie.Type}</span>
                    <p>{movie.Title}</p>
                    <p>{movie.Year}</p>
                    <img alt='movie' src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} />
                </div>

            </div>

        </div>
    );
}

export default MovieCard;
import { useEffect, useState } from "react";
import './App.css';
import MovieCard from "./components/movieCard";
import SearchIcon from './search.svg';

const API_URL = `https://www.omdbapi.com?apikey=d311a810`;

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    setMovies(data.Search);
  }
  useEffect(() => {
    searchMovies(searchTerm);

  }, [searchTerm])
  return (
    <div className="app">

      <h1>Movie Land</h1>
      <div className="search">
        <input placeholder="Search for Movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <img src={SearchIcon}
          alt='search'
          onClick={() => searchMovies(searchTerm)} />
      </div>

      {
        (movies || []).length > 0 ? movies.map((movie,index) => (
          <MovieCard movie={movie} key={index}/>
        ))
          : (
            <div className="empty">No movies found</div>
          )
      }
    </div>
  );
}

export default App;

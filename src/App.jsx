import { useEffect, useState } from 'react';
import './App.css'
import SearchIcon from "./search.svg"
import MovieCard from './MovieCard';

//3af61b
const API_URL = "http://www.omdbapi.com?apikey=3af61b";

function App() {

  const [movies, setMovies] = useState([])
  const [serachTerm, setSearchTerm] = useState("")
  
  const searchMovie = async (title) => {
     const response = await fetch(`${API_URL}&s=${title}`);
     const data = await response.json();

     setMovies(data.Search);
  };

  useEffect(()=> {
    searchMovie('Batman')
  }, []);

  return (
    <>
      <div className='app'>
        <h1>MovieMuse</h1>

        <div className='search'>
            <input placeholder='Search for movies' 
            value={serachTerm}
            onChange={(e) => setSearchTerm(e.target.value)}/>

            <img src={SearchIcon} alt='search' onClick={() => searchMovie(serachTerm)} />
        </div>

      {movies?.length > 0 ? (
        <div className='container'>
          {movies.map((movie) => (
             <MovieCard movie={movie} />

          ))}
       </div>
      ):(
      <div className='empty'>
          <h2>No Movies Found</h2>
      </div>
      )}

    </div>
    </>
  )
}

export default App
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export default function MoviesPage() {
  const [searchText, setSearchText] = useState('') // string
  const [movies, setMovies] = useState<Movie[]>([])

  async function fetchMovies() {
    const res = await fetch(
      `https://omdbapi.com/?apikey=7035c60c&s=${searchText}`
    )
    const { Search } = await res.json()
    setMovies(Search)
  }
  return (
    <>
      <h1>Movies Page!</h1>
      <input
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && fetchMovies()}
      />
      <button onClick={fetchMovies}>검색</button>
      <ul>
        {movies.map(movie => (
          <li key={movie.imdbID}>
            <Link to={`/movies/${movie.imdbID}`}>{movie.Title}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  )
}

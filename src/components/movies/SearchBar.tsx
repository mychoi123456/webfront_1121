import { useMovieStore } from '@/stores/movie'
import { useMovies } from '@/hooks/movie'

export default function SearchBar() {
  const { refetch } = useMovies()
  const searchText = useMovieStore(state => state.searchText)
  const setSearchText = useMovieStore(state => state.setSearchText)
  // const fetchMovies = useMovieStore(state => state.fetchMovies)

  // const movie: Movie = {}

  return (
    <>
      <input
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && refetch()}
      />
      <button onClick={() => refetch()}>검색</button>
    </>
  )
}

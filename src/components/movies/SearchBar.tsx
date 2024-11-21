import { useQueryClient } from '@tanstack/react-query'
import { useMovieStore } from '@/stores/movie'
import { useMovies } from '@/hooks/movie'

export default function SearchBar() {
  useMovies()
  const searchText = useMovieStore(state => state.searchText)
  const setSearchText = useMovieStore(state => state.setSearchText)
  const queryClient = useQueryClient()

  function fetchMovies() {
    queueMicrotask(() => {
      queryClient.fetchQuery({
        queryKey: ['movies', searchText],
        staleTime: 1000 * 60 * 60,
        gcTime: 1000 * 60 * 60
      })
    })
  }

  return (
    <>
      <input
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && fetchMovies()}
      />
      <button onClick={() => fetchMovies()}>검색</button>
    </>
  )
}

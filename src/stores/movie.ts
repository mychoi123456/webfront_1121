import { create } from 'zustand'

export const useMovieStore = create(set => {
  // 상태 객체
  return {
    searchText: '',
    movies: [],
    setSearchText: (text: string) => {
      // searchText = text
      set({
        searchText: text
      })
    }
  }
})

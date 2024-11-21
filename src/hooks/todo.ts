import { useQuery, useMutation } from '@tanstack/react-query'

interface Todo {
  id: string // 할 일 ID
  order: number // 할 일 순서
  title: string // 할 일 제목
  done: boolean // 할 일 완료 여부
  createdAt: string // 할 일 생성일
  updatedAt: string // 할 일 수정일
}

const headers = {
  'Content-Type': 'application/json',
  apikey: 'KDT8_bcAWVpD8',
  username: 'KDT8_ParkYoungWoong'
}

export function useFetchTodos() {
  return useQuery<Todo[]>({
    queryKey: ['todos'],
    queryFn: async () => {
      const res = await fetch(
        'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
        {
          method: 'GET',
          headers
          // body: // xxx
        }
      )
      return await res.json()
    },
    staleTime: 1000 * 60 * 5
  })
}

export function useCreateTodo() {
  return useMutation({
    mutationFn: async (title: string) => {
      const res = await fetch(
        'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
        {
          method: 'POST',
          headers,
          body: JSON.stringify({
            title
          })
        }
      )
      const data = await res.json()
      console.log(data)
    },
    onMutate: () => {},
    onSuccess: () => {},
    onError: () => {},
    onSettled: () => {}
  })
}

import { useFetchTodos } from '@/hooks/todo'
import Loader from '@/components/Loader'

export default function Todos() {
  const { data: todos, isLoading } = useFetchTodos()
  return (
    <>
      <h1>Todos!</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {todos?.map(todo => {
            return <li key={todo.id}>{todo.title}</li>
          })}
        </>
      )}
    </>
  )
}

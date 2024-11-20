import { useUserStore } from '@/stores/user'

export default function HomePage() {
  const user = useUserStore(state => state.user)
  const setUserEmail = useUserStore(state => state.setUserEmail)

  return (
    <>
      <h1>Home Page!</h1>
      <button onClick={() => setUserEmail('thesecon@gmail.com')}>버튼</button>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  )
}

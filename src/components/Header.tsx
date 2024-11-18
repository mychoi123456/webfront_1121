import { NavLink, useNavigate } from 'react-router-dom'
import styles from './Header.module.css'

// Hook(훅)

const navigations = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/movies', label: 'Movies' }
]

export default function Header() {
  const navigate = useNavigate()

  function signIn() {
    // 로그인 처리..
    navigate(-2)
  }

  return (
    <header className={styles.header}>
      {navigations.map(({ to, label }) => {
        return (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => (isActive ? styles.active : '')}>
            {label}
          </NavLink>
        )
      })}
      <button onClick={signIn}>로그인</button>
    </header>
  )
}

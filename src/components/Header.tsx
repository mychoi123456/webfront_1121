import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </header>
  )
}

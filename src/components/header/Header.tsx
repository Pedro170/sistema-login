import styles from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className={ styles.header }>
      <div className={ styles.logo }>Logo</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='task'>Tasks</Link>
          </li>
        </ul>
      </nav>
      <div className={ styles.profile }>
        <img src="https://avatars.githubusercontent.com/u/66875498?v=4" alt="foto do usuário" />
      </div>
    </header>
  )
}

export default Header
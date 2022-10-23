import React from 'react';
import styles from './Header.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from 'contexts/auth/AuthContext'

const Header = () => {
  const { user, signout } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    signout();
    navigate('/');
  }

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
          <li>
            { user && 
              <button onClick={ handleLogout } className={ styles.exit }>
              Sair
              </button> 
            }
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
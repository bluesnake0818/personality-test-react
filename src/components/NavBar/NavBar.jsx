import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'


const NavBar = ({ user, handleLogout }) => {
  return (
    <main className={styles.container}>
      <Link to="/" className={styles.title}>
        <p >hangfive</p>
      </Link>
      <div className={styles.profile}>
        {user ?
          <nav>
            <ul className={styles.userNavLinks}>
              <li className={styles.listItem}>
                <Link to="" className={styles.link} onClick={handleLogout}>
                  <p className={styles.paragraph}>Log Out</p>
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link to="/profile" className={styles.link} >
                  <p className={styles.paragraph}>{user.name}'s Profile</p>
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link to="/compat" className={styles.link} >
                  <p className={styles.paragraph}>Compatibility</p>
                </Link>
              </li>
            </ul>
          </nav>
        :
          <nav>
            <ul className={styles.guestNavLinks}>
              <li className={styles.listItem}>
                <Link className={styles.link} to="/login">Log In</Link>
              </li>
              <li className={styles.listItem}>
                <Link className={styles.link} to="/signup">Sign Up</Link>
              </li>
            </ul>
          </nav>
        } 
      </div>
    </main>
  )
}

export default NavBar


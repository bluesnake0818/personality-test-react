import styles from './SignupOrLogin.module.css'
import { Link } from 'react-router-dom'

const SignupOrLogin = props => {
  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Sign up to save your test results.</h1>
        <div className={styles.links}>
          <Link to="/signup" className={styles.signupLink}><button className={styles.signupButton}>Signup</button></Link>
          <Link to="/login" className={styles.loginLink}>
            <button className={styles.loginButton}>Login</button>
            <p className={styles.instructions}>If you are a returning user, please log in.</p>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default SignupOrLogin

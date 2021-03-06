import styles from './Landing.module.css'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button';

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
        <div className={styles.card}>
          <div className={styles.titleArea}>
            <h1 className={styles.fullTitle}>hangfive Personality Test</h1>
            <h1 className={styles.shortTitle}>Personality Test</h1>
            <h3 className={styles.subtitle}>zodiac signs on a date</h3>
          </div>
          <img className={styles.image} src="/Rabbit_3d.png" alt="bunny"/>
          <Link to='/personalities/new' className={styles.link}>
            <button className={styles.btn} id='start_button'>Start Test</button>
          </Link>
        </div>
          <div className={styles.imageArea}>
            <img className={styles.imageBig} src="/Rabbit_3d.png" alt="bunny"/>
          </div>
        <div className={styles.footer}>
          <p>Copyright 2022 HangFive, Inc.</p>
          <p>All rights reserved.</p>
        </div>
      <div className={styles.footerInLine}>
        <p>Copyright 2022 HangFive, Inc. All rights reserved.</p>
      </div>
    </main>
  )
}

export default Landing

import styles from './PersonalityTest.module.css'
import TestForm from '../../components/TestForm/TestForm'

const PersonalityTest = () => {
  return (
    <main className={styles.container}>
      <TestForm />
      {/* <div className={styles.card}>
        <div className={styles.questionArea}>
          <h1 className={styles.questionNo}>Q.01</h1>
          <h3 className={styles.question}>I started to develop feelings for someone I knew already.</h3>
        </div>
        <div className={styles.listArea}>
          <ul className={styles.list}>
            <li><button className={styles.btn}>Does he/she come attached with a problem?</button></li>
            <li><button className={styles.btn}>Start picturing the future together</button></li>
            <li><button className={styles.btn}>Check my feelings over and over</button></li>
            <li><button className={styles.btn}>Excited!</button></li>
          </ul>
        </div>
      </div> */}
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

export default PersonalityTest

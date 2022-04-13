import styles from './PersonalityTest.module.css'
// import TestForm from '../../components/TestForm/TestForm'


const PersonalityTest = () => {
  return (
    <main className={styles.container}>
      {/* <TestForm /> */}
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

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <main className={styles.container}>
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

export default Footer
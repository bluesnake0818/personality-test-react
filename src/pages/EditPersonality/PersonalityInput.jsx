import styles from './PersonalityInput.module.css'

const PersonalityInput = ({ form, handleChange }) => {
  return (
    <>
      <label htmlFor="comment" className={styles.inputTitle}>Comment</label>
      <input
        className={styles.inputBox}
        value={form.comment ? form.comment : ''} onChange={handleChange} id="comment"
        required name="comment" type="text" placeholder="Comment" autoComplete="off"
      />
    </>
  )
}

export default PersonalityInput


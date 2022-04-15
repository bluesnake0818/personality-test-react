import { TestFormData } from './TestFormData';
import styles from './Step.module.css'

function Step1(props) {
  if (props.page !== 0) {
    return null
  } 

  const slide = TestFormData[props.page]
  const currQuestion = `ans_${props.page+1}`

  return(
    <div className={styles.card}>
      <div className={styles.questionArea}>
        <h1 className={styles.questionNo}>{slide.number}</h1>
        <h3 className={styles.question}>{slide.question}</h3>
      </div>
      <div className={styles.listArea}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <p className={styles.choiceDesc}>{slide.choice_1}</p>
          </li>
          <li className={styles.listItem}>
            <p className={styles.choiceDesc}>{slide.choice_2}</p>
          </li>
          <li className={styles.listItem}>
            <p className={styles.choiceDesc}>{slide.choice_3}</p>
          </li>
        </ul>
      </div>
      <div className={styles.inputArea}>
        <p className={styles.inputInstruction}>Type 1, 2, or 3</p>
        <input 
          className={styles.input}
          type="text" 
          name="ans_1"
          value={props.formData.ans_1}
          onChange={(event) => props.setFormData({...props.formData, ans_1: event.target.value })} 
        />
      </div>
    </div>
  );
}

export default Step1
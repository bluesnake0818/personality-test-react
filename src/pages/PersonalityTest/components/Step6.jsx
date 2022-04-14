import react from "react"
import { TestFormData } from './TestFormData';
import styles from './Step.module.css'
import Button from '../../../components/Button/Button';

function Step6(props) {
  if (props.currentStep !== 5) {
    return null
  } 

  const slide = TestFormData[props.currentStep]
  
  // const currQuestion = `ans_${props.currentStep-1}`

  return(
    <div className={styles.card}>
      <div className={styles.questionArea}>
        <h1 className={styles.questionNo}>{slide.number}</h1>
        <h3 className={styles.question}>{slide.question}</h3>
      </div>
      <div className={styles.listArea}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <input className={styles.radioInput} type="text" name="birthYear" value={props.birthYear} onChange={props.handleChange}/>
            <p className={styles.choiceDesc}>{slide.choice_1}</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Step6

{/* <label htmlFor="username">Username</label>
<input
  className="form-control"
  id="username"
  name="username"
  type="text"
  placeholder="Enter username"
  value={props.username}
  onChange={props.handleChange}
  /> */}
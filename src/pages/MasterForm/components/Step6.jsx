import react from "react"
import { TestFormData } from './TestFormData';
import styles from './Step.module.css'
import Button from '../../../components/Button/Button';

function Step6(props) {
  if (props.currentStep !== 6) {
    return null
  } 

  const slide = TestFormData[props.currentStep-1]
  const currQuestion = `ans_${props.currentStep-1}`

  return(
    <react.Fragment>
    <div className={styles.card}>
      <div className={styles.questionArea}>
        <h1 className={styles.questionNo}>{slide.number}</h1>
        <h3 className={styles.question}>{slide.question}</h3>
      </div>
      <div className={styles.listArea}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <input className={styles.radioInput} type="radio" name={currQuestion} value='1' onChange={props.handleChange}/>
            <p className={styles.choiceDesc}>{slide.choice_1}</p>
          </li>
          <li className={styles.listItem}>
            <input className={styles.radioInput} type="radio" name={currQuestion} value='2' onChange={props.handleChange}/>
            <p className={styles.choiceDesc}>{slide.choice_2}</p>
          </li>
          <li className={styles.listItem}>
            <input className={styles.radioInput} type="radio" name={currQuestion} value='3' onChange={props.handleChange}/>
            <p className={styles.choiceDesc}>{slide.choice_3}</p>
          </li>
          <li className={styles.listItem}>
            <input className={styles.radioInput} type="radio" name={currQuestion} value='4' onChange={props.handleChange}/>
            <p className={styles.choiceDesc}>{slide.choice_4}</p>
          </li>
        </ul>
      </div>
    </div>
    <button className="btn btn-success btn-block">Submit</button>
    </react.Fragment>
  );
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
import { TestFormData } from './TestFormData';
import styles from './Step.module.css'

function Step3(props) {
  if (props.page !== 2) {
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
      {/* <input 
        className={styles.input}
        type="text" 
        value={props.formData.ans_3}
        onChange={(event) => props.setFormData({...props.formData, ans_3: event.target.value })} /> */}
      <div className={styles.listArea}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            {/* <input className={styles.radioInput} type="radio" name={currQuestion} value='1' onChange={props.handleChange}/> */}
            <p className={styles.choiceDesc}>{slide.choice_1}</p>
          </li>
          <li className={styles.listItem}>
            {/* <input className={styles.radioInput} type="radio" name={currQuestion} value='2' onChange={props.handleChange}/> */}
            <p className={styles.choiceDesc}>{slide.choice_2}</p>
          </li>
          <li className={styles.listItem}>
            {/* <input className={styles.radioInput} type="radio" name={currQuestion} value='3' onChange={props.handleChange}/> */}
            <p className={styles.choiceDesc}>{slide.choice_3}</p>
          </li>
          {/* <li className={styles.listItem}>
            <input className={styles.radioInput} type="radio" name={currQuestion} value='4' onChange={props.handleChange}/>
            <p className={styles.choiceDesc}>{slide.choice_4}</p>
          </li> */}
        </ul>
      </div>
      <div className={styles.inputArea}>
        <p className={styles.inputInstruction}>Type 1, 2, or 3</p>
        <input 
          className={styles.input}
          type="text" 
          name="ans_3"
          // placeholder="A"
          value={props.formData.ans_3}
          onChange={(event) => props.setFormData({...props.formData, ans_3: event.target.value })} 
        />
      </div>
    </div>
  );
}

export default Step3

{/* <label htmlFor="password">Password</label>
<input
  className="form-control"
  id="password"
  name="password"
  type="password"
  placeholder="Enter password"
  value={props.password}
  onChange={props.handleChange}
  />       */}
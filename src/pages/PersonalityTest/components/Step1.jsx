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
        <p className={styles.inputInstruction}>Type A, B, or C</p>
        <input 
          className={styles.input}
          type="text" 
          placeholder="A"
          value={props.formData.ans_1}
          onChange={(event) => props.setFormData({...props.formData, ans_1: event.target.value })} 
        />
      </div>
    </div>
  );
}

export default Step1

// <label htmlFor="email">Email address</label>
// <input
//   className="form-control"
//   id="email"
//   name="email"
//   type="text"
//   placeholder="Enter email"
//   value={props.email}
//   onChange={props.handleChange}
//   />
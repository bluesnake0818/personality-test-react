import { TestFormData } from './TestFormData';
import styles from './Step.module.css'

function Step5(props) {
  if (props.page !== 4) {
    return null
  } 

  const slide = TestFormData[props.page]
  const currQuestion = `ans_${props.page+1}`

  const handleChange = event => {
    const sum = parseInt(props.formData.ans_1) + parseInt(props.formData.ans_2) + parseInt(props.formData.ans_3) + parseInt(props.formData.ans_4) + parseInt(event.target.value)
    if (sum < 7) {
      props.setFormData({...props.formData, 
        ans_5: event.target.value, 
        name: 'The Avoider'
      })
    } else if (sum < 9) {
      props.setFormData({...props.formData, 
        ans_5: event.target.value,
        name: 'The Dreamer'
      })
    } else if (sum < 12) {
      props.setFormData({...props.formData, 
        ans_5: event.target.value, 
        name: 'The Martyr'
      })
    } else if (sum < 14) {
      props.setFormData({...props.formData, 
        ans_5: event.target.value, 
        name: 'The Nurturer'
      })
    } else {
      props.setFormData({...props.formData, 
        ans_5: event.target.value, 
        name: 'The Charmer'
      })
    }


    // console.log('step 5 handlechange ' + props.formData.ans_1)
    // props.setFormData({...props.formData, 
    //   name: 'The Martyr',
    //   ans_5: event.target.value })
  }

  return(
    <div className={styles.card}>
      <div className={styles.questionArea}>
        <h1 className={styles.questionNo}>{slide.number}</h1>
        <h3 className={styles.question}>{slide.question}</h3>
      </div>
      {/* <input 
        className={styles.input}
        type="text" 
        value={props.formData.ans_5}
        onChange={(event) => props.setFormData({...props.formData, ans_5: event.target.value })} /> */}
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
          name="ans_5"
          // placeholder="A"
          value={props.formData.ans_5}
          onChange={handleChange} 
        />
      </div>
    </div>
  );
}

export default Step5


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
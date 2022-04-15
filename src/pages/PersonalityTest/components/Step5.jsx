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
  }

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
          name="ans_5"
          value={props.formData.ans_5}
          onChange={handleChange} 
        />
      </div>
    </div>
  );
}

export default Step5
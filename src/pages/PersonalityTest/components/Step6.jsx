import react from "react"
import { TestFormData } from './TestFormData';
import styles from './Step.module.css'
import Button from '../../../components/Button/Button';

function Step6(props) {
  if (props.page !== 5) {
    return null
  } 

  const slide = TestFormData[props.page]
  
  // const currQuestion = `ans_${props.currentStep-1}`

  // const handleChange = evt => {
	// 	if(evt.target.name === 'birthYear'){
	// 		const numBirthYear = evt.target.value
	// 		if(numBirthYear%12 === 0) {
	// 			setFormData({...formData, 
	// 				zodiac: 'monkey',
	// 				birthYear: evt.target.value
	// 			})
	// 		}
	// 		if(numBirthYear%12 === 1) {
	// 			setFormData({...formData, 
	// 				zodiac: 'rooster',
	// 				birthYear: evt.target.value
	// 			})
	// 		}
	// 		if(numBirthYear%12 === 2) {
	// 			setFormData({...formData, 
	// 				zodiac: 'dog',
	// 				birthYear: evt.target.value
	// 			})
	// 		}
	// 		if(numBirthYear%12 === 3) {
	// 			setFormData({...formData, 
	// 				zodiac: 'pig',
	// 				birthYear: evt.target.value
	// 			})
	// 		}
	// 		if(numBirthYear%12 === 4) {
	// 			setFormData({...formData, 
	// 				zodiac: 'rat',
	// 				birthYear: evt.target.value
	// 			})
	// 		}
	// 		if(numBirthYear%12 === 5) {
	// 			setFormData({...formData, 
	// 				zodiac: 'ox',
	// 				birthYear: evt.target.value
	// 			})
	// 		}
	// 		if(numBirthYear%12 === 6) {
	// 			setFormData({...formData, 
	// 				zodiac: 'tiger',
	// 				birthYear: evt.target.value
	// 			})
	// 		}
	// 		if(numBirthYear%12 === 7) {
	// 			setFormData({...formData, 
	// 				zodiac: 'rabbit',
	// 				birthYear: evt.target.value
	// 			})
	// 		}
	// 		if(numBirthYear%12 === 8) {
	// 			setFormData({...formData, 
	// 				zodiac: 'dragon',
	// 				birthYear: evt.target.value
	// 			})
	// 		}
	// 		if(numBirthYear%12 === 9) {
	// 			setFormData({...formData, 
	// 				zodiac: 'snake',
	// 				birthYear: evt.target.value
	// 			})
	// 		}
	// 		if(numBirthYear%12 === 10) {
	// 			setFormData({...formData, 
	// 				zodiac: 'horse',
	// 				birthYear: evt.target.value
	// 			})
	// 		}
	// 		if(numBirthYear%12 === 11) {
	// 			setFormData({...formData, 
	// 				zodiac: 'goat',
	// 				birthYear: evt.target.value
	// 			})
	// 		}
	// 	} else if(evt.target.name === 'name'){
	// 		setFormData({...formData, 
	// 			name: evt.target.value
	// 		})
	// 	}


  return(
    <div className={styles.card}>
      <div className={styles.questionArea}>
        <h1 className={styles.questionNo}>{slide.number}</h1>
        <h3 className={styles.question}>{slide.prompt_1}</h3>
      </div>
      <input 
        className={styles.bYearInput}
        type="number" 
        value={props.formData.birthYear}
        onChange={(event) => props.setFormData({...props.formData, birthYear: event.target.value })} />
      {/* <input 
        type="text" 
        value={props.formData.name}
        onChange={(event) => props.setFormData({...props.formData, name: event.target.value })} />
      <input 
        type="text" 
        value={props.formData.zodiac}
        onChange={(event) => props.setFormData({...props.formData, zodiac: event.target.value })} /> */}
      <div className={styles.commentArea}>
        <h3 className={styles.question}>{slide.prompt_2}</h3>
      <input 
        className={styles.commentInput}
        type="text" 
        value={props.formData.comment}
        onChange={(event) => props.setFormData({...props.formData, comment: event.target.value })} />
      </div>
      {/* <div className={styles.listArea}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <input className={styles.radioInput} type="number" name="birthYear" value={props.birthYear} onChange={props.handleChange}/>
            <p className={styles.choiceDesc}>{slide.choice_1}</p>
          </li>
        </ul>
      </div> */}
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
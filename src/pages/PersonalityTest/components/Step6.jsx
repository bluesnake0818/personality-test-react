import react from "react"
import { TestFormData } from './TestFormData';
import styles from './Step.module.css'

function Step6(props) {
  if (props.page !== 5) {
    return null
  } 

  const slide = TestFormData[props.page]

  const handleChange = evt => {
		if(evt.target.name === 'birthYear'){
			const numBirthYear = evt.target.value
			if(numBirthYear%12 === 0) {
				props.setFormData({...props.formData, 
					zodiac: 'Monkey',
					birthYear: evt.target.value
				})
			}
			if(numBirthYear%12 === 1) {
				props.setFormData({...props.formData, 
					zodiac: 'Rooster',
					birthYear: evt.target.value
				})
			}
			if(numBirthYear%12 === 2) {
				props.setFormData({...props.formData, 
					zodiac: 'Dog',
					birthYear: evt.target.value
				})
			}
			if(numBirthYear%12 === 3) {
				props.setFormData({...props.formData, 
					zodiac: 'Pig',
					birthYear: evt.target.value
				})
			}
			if(numBirthYear%12 === 4) {
				props.setFormData({...props.formData, 
					zodiac: 'Rat',
					birthYear: evt.target.value
				})
			}
			if(numBirthYear%12 === 5) {
				props.setFormData({...props.formData, 
					zodiac: 'Ox',
					birthYear: evt.target.value
				})
			}
			if(numBirthYear%12 === 6) {
				props.setFormData({...props.formData, 
					zodiac: 'Tiger',
					birthYear: evt.target.value
				})
			}
			if(numBirthYear%12 === 7) {
				props.setFormData({...props.formData, 
					zodiac: 'Rabbit',
					birthYear: evt.target.value
				})
			}
			if(numBirthYear%12 === 8) {
				props.setFormData({...props.formData, 
					zodiac: 'Dragon',
					birthYear: evt.target.value
				})
			}
			if(numBirthYear%12 === 9) {
				props.setFormData({...props.formData, 
					zodiac: 'Snake',
					birthYear: evt.target.value
				})
			}
			if(numBirthYear%12 === 10) {
				props.setFormData({...props.formData, 
					zodiac: 'Horse',
					birthYear: evt.target.value
				})
			}
			if(numBirthYear%12 === 11) {
				props.setFormData({...props.formData, 
					zodiac: 'Goat',
					birthYear: evt.target.value
				})
			}
		} 
	}


  return(
    <div className={styles.card}>
      <div className={styles.questionArea}>
        <h1 className={styles.questionNo}>{slide.number}</h1>
        <h3 className={styles.question}>{slide.prompt_1}</h3>
      </div>
      <input 
        className={styles.bYearInput}
        type="number" 
				name="birthYear"
        value={props.formData.birthYear}
				onChange={handleChange}
			/>
      <div className={styles.commentArea}>
        <h3 className={styles.question}>{slide.prompt_2}</h3>
      <input 
        className={styles.commentInput}
        type="text" 
				name="comment"
        value={props.formData.comment}
        onChange={(event) => props.setFormData({...props.formData, comment: event.target.value })} />
      </div>
			<div className={styles.zodiacArea}>
				<h3 className={styles.question}>{slide.prompt_3}</h3>
				<input 
					className={styles.zodiacInput}
					type="text" 
					name="zodiac"
					value={props.formData.zodiac}
					onChange={handleChange} 
				/>
			</div>
    </div>
  )
}

export default Step6
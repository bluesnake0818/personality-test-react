import styles from './TestForm.module.css'
import React, { useState, useRef, useEffect } from 'react'
import { TestFormData } from '../components/TestFormData';
import Button from '../../../components/Button/Button';

const TestForm = () => {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    ans_0: '',
    ans_1: '',
    ans_2: '',
    ans_3: '',
    ans_4: '',
    ans_5: '',
    // birthYear: null,
  })
  const [current, setCurrent] = useState(0)
  const length = TestFormData.length
  let currQuestion = `ans_${current}`

  // useEffect(()=> {
  //   formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  // }, [formData])

  const handleChange = evt => {
			setFormData({...formData, [evt.target.name]: evt.target.value })
		}


  // const nextSlide = () => {
  //   current === length - 1 ?  alert('end of form') : setCurrent(current + 1)
    
  // }

  // const prevSlide = () => {
  //   current === 0 ? alert('beginning of form') : setCurrent(current === 0 ? length - 1 : current -1)
  // }

  

  const handleSubmit = evt => {
		evt.preventDefault()
    console.log(evt.target)
		const testFormData = new FormData()
    testFormData.append('ans_0', formData.ans_0)
		testFormData.append('ans_1', formData.ans_1)
    testFormData.append('ans_2', formData.ans_2)
		testFormData.append('ans_3', formData.ans_3)
    testFormData.append('ans_4', formData.ans_4)
		testFormData.append('ans_5', formData.ans_5)
    // props.handleAddFriend(friendFormData)		
    current === length - 1 ?  alert('end of form') : setCurrent(current + 1)
    currQuestion = `ans_${current}`
    // console.log(formAnswers)
  }

  return (
    <section className={styles.card}>
        {/* <FaArrowAltCircleLeft className={styles.leftArrow} onClick={prevSlide} /> */}
        {/* <FaArrowAltCircleRight className={styles.rightArrow} onClick={nextSlide} /> */}
        
        {TestFormData.map((slide, index) => {
          return (
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
              {
                index === current && 
                (
                  <>
                  <form className={styles.form} autoComplete="off" onSubmit={handleSubmit}>
                    <div className={styles.questionArea}>
                      <h1 className={styles.questionNo}>{slide.number}</h1>
                      <h3 className={styles.question}>{slide.question}</h3>
                    </div>
                    <div className={styles.listArea}>
                      <ul className={styles.list}>
                        <li className={styles.listItem}>
                          <input className={styles.radioInput} type="radio" name={currQuestion} value='1' onChange={handleChange}/>
                          <p className={styles.choiceDesc}>{slide.choice_1}</p>
                        </li>
                        <li className={styles.listItem}>
                          <input className={styles.radioInput} type="radio" name={currQuestion} value='2' onChange={handleChange}/>
                          <p className={styles.choiceDesc}>{slide.choice_2}</p>
                        </li>
                        <li className={styles.listItem}>
                          <input className={styles.radioInput} type="radio" name={currQuestion} value='3' onChange={handleChange}/>
                          <p className={styles.choiceDesc}>{slide.choice_3}</p>
                        </li>
                        <li className={styles.listItem}>
                          <input className={styles.radioInput} type="radio" name={currQuestion} value='4' onChange={handleChange}/>
                          <p className={styles.choiceDesc}>{slide.choice_4}</p>
                        </li>
                      </ul>
                    </div>
                    <Button name="submit" color="#6661F1" type="submit" value="Submit" width="100%" margin="0" disabled={!validForm}/> 
                  </form>
                  </>
                )
              }
            </div>
          ) 
        })}  
    </section>
  )
}

export default TestForm;
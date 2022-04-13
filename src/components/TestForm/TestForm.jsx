import styles from './TestForm.module.css'
import React, {useState} from 'react'
import { TestFormData } from './TestFormData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const TestForm = () => {
  const [current, setCurrent] = useState(0)
  const length = TestFormData.length

  const nextSlide = () => {
    current === length - 1 ?  alert('end of form') : setCurrent(current + 1)
  }

  const prevSlide = () => {
    current === 0 ? alert('beginning of form') : setCurrent(current === 0 ? length - 1 : current -1)
  }

  return (
    <section className={styles.card}>
      <form className={styles.form} autoComplete="off">
        <FaArrowAltCircleLeft className={styles.leftArrow} onClick={prevSlide} />
        <FaArrowAltCircleRight className={styles.rightArrow} onClick={nextSlide} />
        {TestFormData.map((slide, index) => {
          return (
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
              {
                index === current && 
                (
                  <>
                    <div className={styles.questionArea}>
                      <h1 className={styles.questionNo}>{slide.number}</h1>
                      <h3 className={styles.question}>{slide.question}</h3>
                    </div>
                    <div className={styles.listArea}>
                      <ul className={styles.list}>
                        <li className={styles.listItem}><input className={styles.radioInput} type="radio" value='1' name="question_1"/><p className={styles.choiceDesc}>{slide.choice_1}</p></li>
                        <li className={styles.listItem}><input className={styles.radioInput} type="radio" value='2' name="question_1"/><p className={styles.choiceDesc}>{slide.choice_2}</p></li>
                        <li className={styles.listItem}><input className={styles.radioInput} type="radio" value='3' name="question_1"/><p className={styles.choiceDesc}>{slide.choice_3}</p></li>
                        <li className={styles.listItem}><input className={styles.radioInput} type="radio" value='4' name="question_1"/><p className={styles.choiceDesc}>{slide.choice_4}</p></li>
                      </ul>
                    </div>
                  </>
                )
              }
            </div>
          ) 
        })}  
      </form>
    </section>
  )
}

export default TestForm;
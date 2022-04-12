import styles from './TestForm.module.css'
import React, {useState} from 'react'
import { TestFormData } from './TestFormData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const TestForm = () => {
  const [current, setCurrent] = useState(0)
  const length = TestFormData.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ?  0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current -1)
  }

  return (
    <section className={styles.card}>
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
                    <li><button className={styles.btn}>{slide.choice_1}</button></li>
                    <li><button className={styles.btn}>{slide.choice_2}</button></li>
                    <li><button className={styles.btn}>{slide.choice_3}</button></li>
                    <li><button className={styles.btn}>{slide.choice_4}</button></li>
                  </ul>
                </div>
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
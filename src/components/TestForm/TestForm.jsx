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
      <section className={styles.slider}>
        <FaArrowAltCircleLeft className={styles.leftArrow} onClick={prevSlide} />
        <FaArrowAltCircleRight className={styles.rightArrow} onClick={nextSlide} />
        {TestFormData.map((slide, index) => {
          return (
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
              {
                index === current && 
                (
                  <>
                    {/* <img src={ slide.image } alt="zodiac image" className={styles.image} /> */}
                    {/* <div className={styles.desc}> */}
                      <h1>{slide.number}</h1>
                      <h3>{slide.question}</h3>
                      <ul>
                        <li>{slide.choice_1}</li>
                        <li>{slide.choice_2}</li>
                        <li>{slide.choice_3}</li>
                        <li>{slide.choice_4}</li>
                      </ul>
                      {/* <Link to='/PremiumContent'><button className={styles.button}>Learn More</button></Link>     */}
                    {/* </div> */}
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
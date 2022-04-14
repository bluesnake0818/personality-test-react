import react from "react"
import Step1 from "../components/Step1"
import Step2 from "../components/Step2"
import Step3 from "../components/Step3"
import Step4 from "../components/Step4"
import Step5 from "../components/Step5"
import Step6 from "../components/Step6"
import ProgressBar from '@ramonak/react-progress-bar'
import styles from './PersonalityTest.module.css'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { useState, useRef, useEffect } from "react"
import { useNavigate } from 'react-router-dom'

const PersonalityTest_B = (props) => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    ans_1: '',
    ans_2: '',
    ans_3: '', 
    ans_4: '',
    ans_5: '',
    birthYear: '', 
  }, [])
  const [currentStep, setCurrentStep] = useState({
    currentStep: 0,
  }, [])

  // const currentStep = 0
    

  const handleChange = event => {
    const {name, value} = event.target
    setForm({
      [name]: value
    })    
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log(this.state)
    // const { ans_1, ans_2, ans_3, ans_4, ans_5, birthYear } = this.state
    // props.addPersonality(this.state)
    navigate(`/result`)

    // alert(`Your test details: \n 
    //       Answer 1: ${ans_1} \n 
    //       Answer 2: ${ans_2} \n 
    //       Answer 3: ${ans_3} \n 
    //       Answer 4: ${ans_4} \n 
    //       Answer 5: ${ans_5} \n 
    //       Birth Year: ${birthYear}`)
  }
  
  const _next = () => {
    currentStep = currentStep >= 4? 5: currentStep + 1
    setCurrentStep({
      currentStep: currentStep
    })
  }
    
  const _prev = () => {
    currentStep = currentStep <= 0? 0: currentStep - 1
    setCurrentStep({
      currentStep: currentStep
    })
  }

  /*
  * the functions for our button
  */
  const previousButton = () => {
    let prevText = '< Prev'
    if(currentStep !==0){
      return (
        <button className={styles.prevButton} type="button" onClick={_prev}>
          {prevText}
        </button>
      )
    }
    return null;
  }

  const nextButton = () => {
    if(currentStep <5){
      return (
        <FaArrowAltCircleRight className={styles.rightArrow} onClick={_next} />   
      )
    }
    return null;
  }
  
  const currStepIndicator = currentStep + 1;
  const submitText = 'Submit >'
    return (
      <react.Fragment>
      <ProgressBar 
        className={styles.progress}
        completed={0}
        bgColor="#6661F1"
        height="10px"
        baseBgColor="#c4c4c4"
        labelColor="#6661F1"
        labelSize="8px"
        maxCompleted={5}
      />
      {/* <h1>React Wizard Form 🧙‍♂️</h1> */}
      <div className={styles.header}>
        {previousButton()}
        <p className={styles.currentStep}>Step {currStepIndicator}</p> 
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
      {/* 
        render the form steps and pass required props in
      */}
        <Step1 
          currentStep={currentStep} 
          handleChange={handleChange}
          // ans_1={ans_1}
        />
        <Step2 
          currentStep={currentStep} 
          handleChange={handleChange}
          // ans_2={ans_2}
        />
        <Step3 
          currentStep={currentStep} 
          handleChange={handleChange}
          // ans_3={ans_3}
        />
        <Step4
          currentStep={currentStep} 
          handleChange={handleChange}
          // ans_4={ans_4}
        />
        <Step5 
          currentStep={currentStep} 
          handleChange={handleChange}
          // ans_5={ans_5}
        />
        <Step6 
          currentStep={currentStep} 
          handleChange={handleChange}
          // birthYear={birthYear}
        />

        <button type="submit" className={styles.submitButton}>{submitText}</button>
        {nextButton()}

      </form>
      </react.Fragment>
    );
}

export default PersonalityTest_B
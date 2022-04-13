import react from "react"
import Step1 from "./components/Step1"
import Step2 from "./components/Step2"
import Step3 from "./components/Step3"
import Step4 from "./components/Step4"
import Step5 from "./components/Step5"
import Step6 from "./components/Step6"
import ProgressBar from '@ramonak/react-progress-bar'
import styles from './PersonalityTest.module.css'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { useState, useRef, useEffect } from "react"
import { useNavigate } from 'react-router-dom'

class MasterForm extends react.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 0,
      ans_1: '',
      ans_2: '',
      ans_3: '', 
      ans_4: '',
      ans_5: '',
      birthYear: '', 
    }
    
  }

  

  // const [formData, setFormData] = useState({
  //   name: '',
  //   birthYear: null,
	// 	zodiac: '',
  // })
  

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }

  handleSubmit = ({ event, props}) => {
    event.preventDefault()
    // const navigate = useNavigate()
    console.log(this.state)
    // const { ans_1, ans_2, ans_3, ans_4, ans_5, birthYear } = this.state
    props.addPersonality(this.state)
    // navigate(`/result`)
    // const testData = this.state
    // console.log(testData)

    // alert(`Your test details: \n 
    //       Answer 0: ${ans_0} \n 
    //       Answer 1: ${ans_1} \n 
    //       Answer 2: ${ans_2} \n 
    //       Answer 3: ${ans_3} \n 
    //       Answer 4: ${ans_4} \n 
    //       Birth Year: ${birthYear}`)
  }
  
  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 4? 5: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }
    
  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 0? 0: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

/*
* the functions for our button
*/
previousButton() {
  let currentStep = this.state.currentStep;
  let prevText = '< Prev'
  if(currentStep !==0){
    return (
      <button className={styles.prevButton} type="button" onClick={this._prev}>
        {prevText}
      </button>
    )
  }
  return null;
}

nextButton(){
  let currentStep = this.state.currentStep;
  if(currentStep <5){
    return (
      // <button 
      //   className="btn btn-primary float-right" 
      //   type="button" onClick={this._next}>
      // Next
      <FaArrowAltCircleRight className={styles.rightArrow} onClick={this._next} />
      // </button>        
    )
  }
  return null;
}
  
  render() {    
    let currStepIndicator = this.state.currentStep + 1;
    return (
      <react.Fragment>
      <ProgressBar 
        className={styles.progress}
        completed={this.state.currentStep}
        bgColor="#6661F1"
        height="10px"
        baseBgColor="#c4c4c4"
        labelColor="#6661F1"
        labelSize="8px"
        maxCompleted={5}
      />
      {/* <h1>React Wizard Form 🧙‍♂️</h1> */}
      <div className={styles.header}>
        {this.previousButton()}
        <p className={styles.currentStep}>Step {currStepIndicator}</p> 
      </div>

      <form onSubmit={this.handleSubmit} className={styles.form}>
      {/* 
        render the form steps and pass required props in
      */}
        <Step1 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          // ans_0={this.state.ans_0}
        />
        <Step2 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          // ans_1={this.state.ans_1}
        />
        <Step3 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          // ans_2={this.state.ans_2}
        />
        <Step4
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          // ans_3={this.state.ans_3}
        />
        <Step5 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          // ans_4={this.state.ans_4}
        />
        <Step6 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          birthYear={this.state.birthYear}
        />
        
        {this.nextButton()}

      </form>
      </react.Fragment>
    );
  }
}

export default MasterForm
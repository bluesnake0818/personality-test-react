import react from "react"
import Step1 from "./components/Step1"
import Step2 from "./components/Step2"
import Step3 from "./components/Step3"
import Step4 from "./components/Step4"
import Step5 from "./components/Step5"
import Step6 from "./components/Step6"
import ProgressBar from '@ramonak/react-progress-bar'
import styles from './MasterForm.module.css'

class MasterForm extends react.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      ans_1:  '',
      ans_2: '',
      ans_3: '', 
      ans_4:  '',
      ans_5: '',
      ans_6: '', 
    }
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }
   
  handleSubmit = event => {
    event.preventDefault()
    const { ans_1, ans_2, ans_3, ans_4, ans_5, ans_6 } = this.state
    alert(`Your test details: \n 
           Answer 1: ${ans_1} \n 
           Answer 2: ${ans_2} \n 
           Answer 3: ${ans_3} \n 
           Answer 4: ${ans_4} \n 
           Answer 5: ${ans_5} \n 
           Answer 6: ${ans_6}`)
  }
  
  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 5? 6: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }
    
  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

/*
* the functions for our button
*/
previousButton() {
  let currentStep = this.state.currentStep;
  if(currentStep !==1){
    return (
      <button 
        className="btn btn-secondary" 
        type="button" onClick={this._prev}>
      Previous
      </button>
    )
  }
  return null;
}

nextButton(){
  let currentStep = this.state.currentStep;
  if(currentStep <6){
    return (
      <button 
        className="btn btn-primary float-right" 
        type="button" onClick={this._next}>
      Next
      </button>        
    )
  }
  return null;
}
  
  render() {    
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
        maxCompleted={6}
      />
      <h1>React Wizard Form 🧙‍♂️</h1>
      <p>Step {this.state.currentStep} </p> 

      <form onSubmit={this.handleSubmit}>
      {/* 
        render the form steps and pass required props in
      */}
        <Step1 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          email={this.state.email}
        />
        <Step2 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          username={this.state.username}
        />
        <Step3 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          password={this.state.password}
        />
        <Step4
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          email={this.state.email}
        />
        <Step5 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          username={this.state.username}
        />
        <Step6 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          password={this.state.password}
        />
        {this.previousButton()}
        {this.nextButton()}

      </form>
      </react.Fragment>
    );
  }
}



export default MasterForm
// ReactDOM.render(<MasterForm />, document.getElementById('root'))
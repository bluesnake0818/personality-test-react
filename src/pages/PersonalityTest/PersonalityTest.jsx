import React, { useState } from "react"
import Step1 from "./components/Step1"
import Step2 from "./components/Step2"
import Step3 from "./components/Step3"
import Step4 from "./components/Step4"
import Step5 from "./components/Step5"
import Step6 from "./components/Step6"
import styles from './PersonalityTest.module.css'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'


function PersonalityTest(props) {
  const navigate = useNavigate()
  const [page, setPage] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    ans_1: "",
    ans_2: "",
    ans_3: "",
    ans_4: "",
    ans_5: "",
    birthYear: 0,
    comment: "",
    zodiac: "",
  })

  const FormTitles = ["Q.01", "Q.02", "Q.03", "Q.04", "Q.05", "Q.06"]
  const nextText = 'Next >'
  const submitText = 'Submit >'

  const PageDisplay = () => {
    if (page === 0) {
      return <Step1 page={page} formData={formData} setFormData={setFormData} />
    } else if (page === 1) {
      return <Step2 page={page} formData={formData} setFormData={setFormData}/>
    } else if (page === 2) {
      return <Step3 page={page} formData={formData} setFormData={setFormData}/>
    } else if (page === 3) {
      return <Step4 page={page} formData={formData} setFormData={setFormData}/>
    } else if (page === 4) {
      return <Step5 page={page} formData={formData} setFormData={setFormData}/>
    } else {
      return <Step6 page={page} formData={formData} setFormData={setFormData}/>
    }
  }


  

  return (
    <div className={styles.form}>
      <div className={styles.progressbar}>
        <div style={{width: page === 0 ? "16.7%" : page === 1 ? "33.3%" : page === 2 ? "50.0%" : page === 3 ? "66.7%" : page === 4 ? "83.3%" : "100.0%" }}
        ></div>
      </div>
      <div className="form-container">
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button className={styles.nextButton}
            onClick={ async (e) => {
              if(page === FormTitles.length - 1) {
                alert("Form Submitted")
                e.preventDefault()    
                props.addPersonality(formData)
                navigate(`/personalities`)
              } else {
              setPage((currPage) => currPage +1)
              }
            }}
          >
            {page === FormTitles.length - 1 ? submitText : nextText}
          </button>
        </div>
      </div>
    </div>


  )
}


export default PersonalityTest
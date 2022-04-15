import styles from './EditPersonality.module.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';

import {getOne} from '../../services/personalityService'

// Components
import PersonalityInput from './PersonalityInput'

const EditPersonality = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    props.updatePersonality(form)
    navigate(`/personalities`)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    const fetchOne = async () => {
      const data = await getOne(id)
      setForm({
        id: data.personality.id,
        name: data.personality.name,
        birthYear: data.personality.birthYear,
        ans_1: data.personality.ans_1,
        ans_2: data.personality.ans_2,
        ans_3: data.personality.ans_3,
        ans_4: data.personality.ans_4,
        ans_5: data.personality.ans_5,
        comment: data.personality.comment,
        zodiac: data.personality.zodiac,
      })
    }
    id && fetchOne()
    return () => setForm({})
  }, [id])

  return (
    <main className={styles.container}>    
      <h1 className={styles.title}>Update Comment</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputArea}>
          <PersonalityInput form={form} handleChange={handleChange} />
        </div>
        <div className={styles.buttonArea}>
          <button type="submit" className={styles.button}>Submit!</button>
        </div>
      </form>
      <Footer />
    </main>
  )
}

export default EditPersonality;      



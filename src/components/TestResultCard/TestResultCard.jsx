import { Link, useNavigate } from 'react-router-dom'
import styles from './TestResultCard.module.css'


function TestResultCard({ personality, deletePersonality }) {
  const navigate = useNavigate()
  const imgURL = `/${personality.zodiac}_3d.png`

  return (
    <>
      <Link to={`/personalities/${personality.id}`} className={styles.card}>
        <h3 className={styles.name}>{personality.name} {personality.zodiac}</h3>  
        <div className={styles.imgBtnArea}>
          <img src={imgURL} alt="zodiac" className={styles.image}/>
          <Link to={`/personalities/${personality.id}/edit`} className={styles.link}>
            <button className={styles.editButton}>Edit</button> 
          </Link>
          <Link
            className={styles.linkForButton}
            to=''
            >
            <button
              className={styles.deleteButton}
              onClick={()=> deletePersonality(personality.id)}
            >
              Delete
            </button>
          </Link>
        </div>
        <div className={styles.listArea}>
          <ul className={styles.list}>
            <li><p className={styles.comment}>Zodiac: </p></li>
            <li><p className={styles.createdAt}>Created At: {personality.created_at}</p></li>
            <li><p className={styles.comment}>Comment: {personality.comment}</p></li>
            <li><p className={styles.updatedAt}>Updated At:</p></li>
          </ul>
        </div>
      </Link>
      
    </>
    )
    
  }
  
  export default TestResultCard
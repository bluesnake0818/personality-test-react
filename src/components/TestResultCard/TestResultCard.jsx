import { Link, useNavigate } from 'react-router-dom'
import styles from './TestResultCard.module.css'
import { ZodiacMatchData } from '../../pages/Result/ZodiacMatchData'

function TestResultCard({ personality, deletePersonality }) {
  // const friendZod = friend.zodiac
  // const friendZodImg = `/designs_${friendZod}.png`
  const navigate = useNavigate()
  const imgURL = `/${personality.zodiac.toLowerCase()}_3d.png`
  

  return (
    <>
      <Link to={`/personalities/${personality.id}`} className={styles.card}>
        <h3 className={styles.name}>{personality.name} {personality.zodiac}</h3>  
        <div className={styles.imgBtnArea}>
          <img src={imgURL} alt="" className={styles.image}/>
          <Link to={`/personalities/${personality.id}/edit`} className={styles.link}>
            <button className={styles.editButton}>Edit</button> 
          </Link>
          {/* <Link to={`/personalities/${personality.id}/confirmation`} className={styles.link} personality={personality}>
            <button className={styles.deleteButton}>Delete</button> 
          </Link> */}
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
          {/* <button className={styles.deleteButton} onClick={() => navigate(`/personalities/${personality.id}/confirmation`, { state: personality })}>Delete</button> */}
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
    // <Link className={styles.linkToShowCompat} state={{friend}} to="/showCompat">
    //   <div className={styles.card}>
    //     <ul className={styles.list}>
    //       <li className={styles.listItem}>
    //         Birth Year: {friend.birthYear}
    //       </li>
    //       <li className={styles.listItem}>
    //         Zodiac Sign: {friendZod}
    //       </li>
    //       <li className={styles.listFooterItem}>
    //         <Link
    //           className={styles.linkForButton}
    //           to='/edit'
    //           state={{friend}}
    //         >
    //           <button className={styles.editButton}>
    //             Edit
    //           </button>
    //         </Link>
    //         <Link
    //           className={styles.linkForButton}
    //           to=''
    //         >
    //           <button
    //             className={styles.deleteButton}
    //             onClick={()=> handleDeleteFriend(friend._id)}
    //           >
    //           Delete
    //           </button>
    //         </Link>
    //         <img className={styles.imgInCard} src={friendZodImg} alt="" />
    //       </li>
    //     </ul>
    //   </div>
    // </Link>
    )
    
  }
  
  export default TestResultCard
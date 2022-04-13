import { Link } from 'react-router-dom'
import styles from './TestResultCard.module.css'

function TestResultCard() {
  // const friendZod = friend.zodiac
  // const friendZodImg = `/designs_${friendZod}.png`

  return (
    <>
      <div className={styles.card}>
        <h3 className={styles.name}>The ever-cautious dog</h3>  
        <div className={styles.imgBtnArea}>
          <img src='/dog_3d.png' alt="" className={styles.image}/>
          <button className={styles.editButton}>Edit</button>
          <button className={styles.deleteButton}>Delete</button>
        </div>
        <div className={styles.listArea}>
          <ul className={styles.list}>
            <li ><p className={styles.comment}>Comment:</p></li>
            <li><p className={styles.createdAt}>Created At:</p></li>
            <li><p className={styles.updatedAt}>Updated At:</p></li>
          </ul>
        </div>
      </div>
      
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
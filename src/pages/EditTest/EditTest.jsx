import styles from './EditTest.module.css'
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';


const EditTest = (props) => {
  return (
    <main className={styles.container}>    
      <h1 className={styles.title}>Update comment</h1>
      <div className={styles.card}>
        <img src='/dog_3d.png' alt="" className={styles.image}/>
        <div className={styles.inputArea}>
          <label htmlFor="personalityType" className={styles.label}>Personality</label>
          <input className={styles.input} id="personalityType" required name="personalityType" type="text" placeholder="The Ever-cautious dog" autoComplete="off" />
          <label htmlFor="comment" className={styles.label}>Comment</label>
          <input className={styles.input} id="comment" required name="comment" type="text" placeholder="Comment" autoComplete="off" />
        </div>
        <div className={styles.buttonArea}>
          <Button name='Save' color='#FF6969'/>
          <Button name='Cancel' color='#6661F1'/>
        </div>
      </div>

      {/* <ul className={styles.list}>
        {props.friends.map((friend, index) => 
          (friend.owner._id === props.user.profile) &&
            <li key={index} className={styles.listItem}>
              <h5 className={styles.cardTitle}>{friend.name}</h5>
              <TestResultCard
                key={friend._id} 
                friend={friend} 
                handleDeleteFriend={props.handleDeleteFriend}
                user={props.user}
              />
            </li>
          )
        }   
      </ul> */}
      <Footer />
    </main>
  )
}

export default EditTest;
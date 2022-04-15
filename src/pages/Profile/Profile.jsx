import styles from './Profile.module.css'
import { Link } from 'react-router-dom';
import TestResultCard from '../../components/TestResultCard/TestResultCard';

const Profile = ({ user, personalities, deletePersonality } ) => {
  return (
    <main className={styles.container}>    
      <h1 className={styles.title}>Welcome, {user.name}!</h1>
      <Link to='/personalities/new' className={styles.link}>
        <button className={styles.button}>Add Test</button>
      </Link>    
      {personalities.map((personality) => (
        <TestResultCard 
          personality={personality} 
          deletePersonality={deletePersonality}
          key={personality.id}
        />
      ))}
      
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
    </main>
  )
}

export default Profile;
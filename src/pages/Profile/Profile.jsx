import styles from './Profile.module.css'
import { Link } from 'react-router-dom';
import TestResultCard from '../../components/TestResultCard/TestResultCard';

const Profile = ({ user, personalities, deletePersonality } ) => {
  return (
    <main className={styles.container}>    
      <h1 className={styles.title}>Welcome, {user.name}!</h1>
      <div className={styles.subContainer}>
        <div className={styles.buttonContainer}>
          <Link to='/personalities/new' className={styles.link}>
            <button className={styles.button}>New Test</button>
          </Link>    
        </div>
        <div className={styles.listContainer}>
          {personalities.map((personality) => (
            <TestResultCard 
              personality={personality} 
              deletePersonality={deletePersonality}
              key={personality.id}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Profile;
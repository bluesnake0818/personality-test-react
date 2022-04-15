import styles from './Profile.module.css'
import { Link } from 'react-router-dom';
import TestResultCard from '../../components/TestResultCard/TestResultCard';

const Profile = ({ personalitiesLoaded, user, personalities, deletePersonality } ) => {
  return (
    <div className={styles.loading}>
      {/* {!personalitiesLoaded ?
        <>
          <h3>Loading...</h3>
        </>
        : */}
        <main className={styles.container}>    
          <h1 className={styles.title}>Welcome, {user.name}!</h1>
          <div className={styles.subContainer}>

            <div className={styles.listContainer}>

                {personalities.map((personality) => 
                  personality.profile_id === user.id && 
                    <TestResultCard 
                      personality={personality} 
                      deletePersonality={deletePersonality}
                      key={personality.id}
                    />
                  )
                }
            </div>
            <div className={styles.buttonContainer}>
              <Link to='/personalities/new' className={styles.link}>
                <button className={styles.button}>New Test</button>
              </Link>    
            </div>
          </div>
        </main>
      {/* } */}
    </div>
  )
}

export default Profile;
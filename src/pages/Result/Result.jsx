// import { ZodiacData } from './ZodiacData';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Result.module.css'


const Result = () => {
  // const [zodiacs, setZodiacs] = useState(ZodiacData)
  // const [zodiacObj, setZodiacObj] = useState(
  //   {} 
  // )
  
  // useEffect(() => {
  //   if (props.profile.zodiac)
  //     {setZodiacObj(zodiacs.find(zodiacObj => zodiacObj.id === props.profile.zodiac))}
  //   },[props.profile.zodiac])

  // const yourZod = props.profile.zodiac
  // const yourZodImg = `/designs_${yourZod}.png`
  // const bff = zodiacObj.bff
  // const nemesis = zodiacObj.nemesis
  // const yourBffImg = `/designs_${bff}.png`
  // const yourNemesisImg = `/designs_${nemesis}.png`

  return (
    <div className={styles.container}>
      {1===1 ?
        <div className={styles.loading}>
          <h1 className={styles.title}>Loading...</h1>
          <img src="/monkey_3d.png" className={styles.image}/>
          <p className={styles.note}>Analyzing your personality type..</p>
          <p className={styles.note}>Buckle up!</p>
        </ div>
        :
        <div></div>
        // <div className={styles.container}>
        //   <h2>{props.profile.name}'s Profile</h2>
        //   <img src={yourZodImg} alt="" className={styles.profileImage}/>

        //   <h3>Description</h3>
        //   <div className={styles.card}>
        //     <ul className={styles.list}>
        //       <li className={styles.listItem}>Zodiac Sign: {zodiacObj.name}</li>
        //       <li className={styles.listItem}>{zodiacObj.archetype}</li>
        //       <li className={styles.listItem}>{zodiacObj.desc}</li>
        //     </ul>
        //   </div>

        //   <h3>Celebs in {yourZod}</h3>
        //   <div className={styles.card}>
        //     <ul className={styles.list}>  
        //       <li className={styles.listItem}> {zodiacObj.celeb1}</li>
        //       <li className={styles.listItem}> {zodiacObj.celeb2}</li>
        //       <li className={styles.listItem}> {zodiacObj.celeb3}</li>
        //     </ul>
        //   </div>

        //   <h3>Your best friend</h3>
        //   <div className={styles.card}>
        //     <ul className={styles.list}>  
        //       <li className={styles.listItem}>
        //         <p>Most Compatible: {zodiacObj.bff}</p>
        //         <img className={styles.image} src={yourBffImg} alt="" />
        //       </li>
        //     </ul>
        //   </div>

        //   <h3>Your worst enemy</h3>
        //   <div className={styles.card}>
        //     <ul className={styles.list}>  
        //       <li className={styles.listItem}>
        //         <p>Worst Enemy: {zodiacObj.nemesis}</p>
        //         <img className={styles.image} src={yourNemesisImg} alt="" />
        //       </li>
        //     </ul>
        //   </div>
        //   <Link to="" onClick={props.handleLogout}>
        //       <button className={styles.button}>Log Out</button>
        //   </Link>
        // </div>
      }
    </div>
  )
}

export default Result;
import { ZodiacData } from './ZodiacData';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Result.module.css'
import BarChart from '../../components/BarChart/BarChart';


const Result = (props) => {
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
      {1===0 ?
        <div className={styles.loading}>
          <h1 className={styles.title}>Loading...</h1>
          <img src="/monkey_3d.png" className={styles.image}/>
          <p className={styles.note}>Analyzing your personality type..</p>
          <p className={styles.note}>Buckle up!</p>
        </ div>
        :
        <div className={styles.result}>
          <div className={styles.myTypeCard}>
            <h1 className={styles.title}>The Bulldozing Rabbit</h1>
            <img src='/rabbit_3d.png' alt="" className={styles.image}/>
            <BarChart />
            <p className={styles.desc}>{ZodiacData[3].desc}</p>
          </div>

          <div className={styles.card}>
            <h5 className={styles.category}>Best friend to hang with</h5>
            <h3 className={styles.name}>The ever-cautious dog</h3>  
            <img src='/dog_3d.png' alt="" className={styles.image}/>
            <p className={styles.desc}>description</p>
          </div>

          <div className={styles.card}>
            <h5 className={styles.category}>They make you a better person</h5>
            <h3 className={styles.name}>The curious goat</h3>  
            <img src='/goat_3d.png' alt="" className={styles.image}/>
            <p className={styles.desc}>description</p>
          </div>

          <div className={styles.downloadCard}>
            <h5 className={styles.category}>Meet more friends at hangfive app</h5>
            <img src='/app_store.png' alt="" className={styles.appStoreImg}/>
            <img src='/app_preview.png' alt="" className={styles.appPreviewImg}/>
          </div>

          <div className={styles.shareCard}>
            <h5 className={styles.shareTitle}>Share my personality type</h5>
            <div className={styles.shareButtons}>
              <img src='/Facebook.png' alt="" className={styles.icon}/>
              <img src='/Twitter.png' alt="" className={styles.icon}/>
              <img src='/Instagram.png' alt="" className={styles.icon}/>
              <img src='/URL.png' alt="" className={styles.icon}/>
            </div>
          </div>
          {/* <Link to="" onClick={props.handleLogout}> */}
          <div className={styles.buttonArea}>
            <button className={styles.retakeButton}>Re-take</button>
            <button className={styles.saveButton}>Save</button>
          </div>
          {/* </Link> */}


          {/* <Link to="" onClick={props.handleLogout}>
              <button className={styles.button}>Log Out</button>
          </Link> */}
          <div className={styles.footer}>
            <p>Copyright 2022 HangFive, Inc.</p>
            <p>All rights reserved.</p>
          </div>
          <div className={styles.footerInLine}>
            <p>Copyright 2022 HangFive, Inc. All rights reserved.</p>
          </div>
        </div>
      }
    </div>
  )
}

export default Result;
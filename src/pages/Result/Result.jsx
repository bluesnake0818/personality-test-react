import { ZodiacData } from './ZodiacData';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Result.module.css'
import BarChart from '../../components/BarChart/BarChart';
import Button from '../../components/Button/Button';
import ShareLink from 'react-facebook-share-link'
import {CopyToClipboard} from 'react-copy-to-clipboard';

// Services
import { getOne } from '../../services/personalityService'

const Result = ({ profile, handleLogout, user }) => {
  const { id } = useParams ()
  const [personality, setPersonality] = useState({})
  const [zodiacs, setZodiacs] = useState(ZodiacData)
  const [zodiacObj, setZodiacObj] = useState(
    {} 
  )

  useEffect(() => {
    if (profile.zodiac)
      {setZodiacObj(zodiacs.find(zodiacObj => zodiacObj.id === profile.zodiac))}
    },[profile.zodiac])
  
  useEffect(() => {
    const fetchOne = async () => {
      const data = await getOne(id)
      setPersonality(data.personality)
    }
    fetchOne()
  }, [id])


  const imgURL = `/${personality.zodiac}_3d.png`
 
  let zodIdx = 0

  if (personality.zodiac === 'Rat') {
    zodIdx = 0
  } else if (personality.zodiac === 'Ox') {
    zodIdx = 1
  } else if (personality.zodiac === 'Tiger') {
    zodIdx = 2
  } else if (personality.zodiac === 'Rabbit') {
    zodIdx = 3
  } else if (personality.zodiac === 'Dragon') {
    zodIdx = 4
  } else if (personality.zodiac === 'Snake') {
    zodIdx = 5
  } else if (personality.zodiac === 'Horse') {
    zodIdx = 6
  } else if (personality.zodiac === 'Goat') {
    zodIdx = 7
  } else if (personality.zodiac === 'Monkey') {
    zodIdx = 8
  } else if (personality.zodiac === 'Rooster') {
    zodIdx = 9
  } else if (personality.zodiac === 'Dog') {
    zodIdx = 10
  } else {
    zodIdx = 11
  } 
  
  return (
    <div className={styles.container}>
      
        <div className={styles.result}>
          <div className={styles.myTypeCard}>
            <h1 className={styles.title}>{personality.name} {personality.zodiac}</h1>
            <div className={styles.imgChartArea}>
              <img src={imgURL} alt="" className={styles.image}/>
              <div className={styles.chartContainer}>
                <BarChart className={styles.chart} user={user} personality={personality} />
              </div>
              <img src={imgURL} alt="" className={styles.imageBig}/>
            </div>
            <ul className={styles.list}>
              <li>
                <h5 className={styles.descTitle}>First Impressions</h5>
                <p className={styles.desc}>{ZodiacData[zodIdx].desc1}</p>
              </li>
              <li>
                <h5 className={styles.descTitle}>Love at Second sight</h5>
                <p className={styles.desc}>{ZodiacData[zodIdx].desc2}</p>
              </li>
              <li>
                <h5 className={styles.descTitle}>Third Vibe's the Charm</h5>
                <p className={styles.desc}>{ZodiacData[zodIdx].desc3}</p>
              </li>
              <li>
                <h5 className={styles.descTitle}>...But Wait, There's Four!</h5>
                <p className={styles.desc}>{ZodiacData[zodIdx].desc4}</p>
              </li>
              <li>
                <h5 className={styles.descTitle}>Your Weaknesses: Death, ...</h5>
                <p className={styles.desc}>{ZodiacData[zodIdx].desc5}</p>
              </li>
              <li>
                <h5 className={styles.descTitle}>...and Bills, and...</h5>
                <p className={styles.desc}>{ZodiacData[zodIdx].desc6}</p>
              </li>
            </ul>
            
          </div>

          <h5 className={styles.category}>Best friend to hang with</h5>
          <div className={styles.card}>
            <h3 className={styles.name}>The ever-cautious dog</h3>  
            <img src='/dog_3d.png' alt="" className={styles.imageFriend}/>
          </div>

          <h5 className={styles.category}>They make you a better person</h5>
          <div className={styles.card}>
            <h3 className={styles.name}>The curious goat</h3>  
            <img src='/goat_3d.png' alt="" className={styles.imageFriend}/>
          </div>

          <h5 className={styles.category}>Meet more friends at hangfive app</h5>
          <a className={styles.downloadCard} href="https://hangfive.page.link/HrGD" target="_blank">
            <img src='/app_store.png' alt="" className={styles.appStoreImg}/>
            <img src='/app_preview.png' alt="" className={styles.appPreviewImg}/>
          </a>

          <div className={styles.shareCard}>
            <h5 className={styles.shareTitle}>Share my personality type</h5>
            <div className={styles.shareButtons}>
              <ShareLink link='https://personality-test-react.netlify.app/'>
                {link => (
                    <a href={link} target='_blank'><img src='/Facebook.png' alt="" className={styles.icon}/></a>
                )}
              </ShareLink>
              <a className={styles.linkAffiliate} href="https://www.twitter.com" target="_blank">
                <img src='/Twitter.png' alt="" className={styles.icon}/>
              </a>
              <a className={styles.linkAffiliate} href="https://www.instagram.com" target="_blank">
                <img src='/Instagram.png' alt="" className={styles.icon}/>
              </a>
              <CopyToClipboard text='https://personality-test-react.netlify.app/'>
                <img src='/URL.png' alt="" className={styles.icon}/>
              </CopyToClipboard>
            </div>
          </div>

          <div className={styles.buttonArea}>
            <Link className={styles.link} to='/personalities/new'><Button className={styles.retakeButton} name="Re-take" color="#FF6969"/> </Link>
            <Link className={styles.link} to='/personalities'><Button className={styles.listButton} name="List" color="#6661F1"/> </Link>
          </div>

          <div className={styles.footer}>
            <p>Copyright 2022 HangFive, Inc.</p>
            <p>All rights reserved.</p>
          </div>
          <div className={styles.footerInLine}>
            <p>Copyright 2022 HangFive, Inc. All rights reserved.</p>
          </div>
        </div>
    </div>
  )
}

export default Result;
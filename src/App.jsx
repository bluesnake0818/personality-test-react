import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import ReactGa from 'react-ga'
import NavBar from './components/NavBar/NavBar'
import SignupOrLogin from './pages/SignupOrLogin/SignupOrLogin'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import Profile from './pages/Profile/Profile'
import PersonalityTest from './pages/PersonalityTest/PersonalityTest'
import Result from './pages/Result/Result'
import EditPersonality from './pages/EditPersonality/EditPersonality'
import Confirmation from './pages/Confirmation/Confirmation'
import * as authService from './services/authService'
import * as personalityService from './services/personalityService'
import * as profileService from './services/profileService'

const App = () => {
  const [personalities, setPersonalities] = useState([])
  const navigate = useNavigate()
  const [user, setUser] = useState(authService.getUser())
  const [profile, setProfile] = useState({
    name: ''
  })
  const [personalitiesLoaded, setPersonalitiesLoaded] = useState(false)

  useEffect(() => { 
    ReactGa.initialize('G-XHXE24G2T6')

    ReactGa.pageview('/')
  }, [])

  useEffect(()=> {
    if(user) {
      profileService.getAllProfiles()
      .then(profiles => {
        setProfile(profiles.find(profile => profile._id === user.profile))
      })
    }
  }, [user])

  useEffect(() => {
    const fetchData = async () => {
      const data = await personalityService.getAll()
      setPersonalities(data)
    }
    fetchData()
  }, [])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const addPersonality = async (personalityData) => {
    const personality = await personalityService.create(personalityData)
    setPersonalities([...personalities, personality])
  }

  const updatePersonality = async (personalityData) => {
    const updatedPersonality = await personalityService.update(personalityData)
    setPersonalities(personalities.map((personality) => (
      personality.id === updatedPersonality.id ? updatedPersonality : personality
    )))
  }

  const deletePersonality = async (id) => {
    await personalityService.deleteOne(id)
    setPersonalities (personalities.filter(personality => personality.id !== parseInt(id)))
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/personalities/new"
          element={
            user? 
            <PersonalityTest addPersonality={addPersonality} user={user}/>
            :
            <Navigate to="/signup-or-login" />
          }
        />
        <Route
          path="/personalities/:id" element={
            <Result handleLogout={handleLogout} user={user} profile={profile} />}
        />
        <Route
          path="/signup-or-login"
          element={<SignupOrLogin />}
        />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/personalities"
          element={
            user? 
            <Profile 
              user={user} 
              profile={profile} 
              personalities={personalities} 
              deletePersonality={deletePersonality} 
              personalitiesLoaded={personalitiesLoaded}
              />
            :
            <Navigate to="/login" />
          }
        />
        <Route
          path="/personalities/:id/edit" element={
            <EditPersonality personalities={personalities} updatePersonality={updatePersonality} user={user} />}
        />
        <Route path="/personalities/:id/confirmation" element={
            <Confirmation deletePersonality={deletePersonality} user={user} />} 
        />
      </Routes>
    </>
  )
}

export default App

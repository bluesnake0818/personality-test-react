import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
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

const App = () => {
  const [personalities, setPersonalities] = useState([])
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  // console.log(user)

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
    // navigate('/result')
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
          element={<PersonalityTest addPersonality={addPersonality} user={user}/>}
        />
        <Route
          path="/personalities/:id" element={
            <Result handleLogout={handleLogout} user={user} />}
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
          element={<Profile user={user} personalities={personalities} deletePersonality={deletePersonality} />}
        />
        <Route
          path="/personalities/:id/edit" element={
            <EditPersonality personalities={personalities} updatePersonality={updatePersonality} user={user} />}
        />
        {/* <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        /> */}
        <Route path="/personalities/:id/confirmation" element={
            <Confirmation deletePersonality={deletePersonality} user={user} />} 
        />
        {/* <Route
          path="/personalities/:id/confirmation"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        /> */}
      </Routes>
    </>
  )
}

export default App

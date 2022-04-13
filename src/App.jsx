import { useState } from 'react'
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
import EditTest from './pages/EditTest/EditTest'
import MasterForm from './pages/MasterForm/MasterForm'
import * as authService from './services/authService'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  // console.log(user)

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
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
          path="/personality-test"
          element={<PersonalityTest />}
        />
        <Route
          path="/result"
          element={<Result handleLogout={handleLogout} />}
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
          path="/profile"
          element={<Profile />}
        />
        <Route
          path="/edit-test"
          element={<EditTest />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/master-form"
          element={<MasterForm />}
        />
      </Routes>
    </>
  )
}

export default App

import TopNav from './components/topnav/TopNav'
import Home from './pages/home/Home'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Setting from './pages/setting/Setting'
import SideBar from './components/sidebar/SideBar'
import Login from './pages/Login/Login'
import SignUp from './pages/signup/SignUp'
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom'

function App () {
  const user = true
  return (
    <Router>
      <TopNav />
      <Routes>
        <Route
          path='/Home' element={
            <Home />
          }
        />
        <Route
          path='/write' element={
            user ? <Write /> : <SignUp />
          }
        />
        <Route
          path='/login' element={
            user ? <Home /> : <Login />
          }
        />
        <Route
          path='/SignUp' element={
            user ? <Home /> : <SignUp />
          }
        />
      </Routes>
    </Router>
  )
}

export default App

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import Player from './components/containes/player/Player'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import Detailspage from './pages/DetailPage'
import Confirm from './pages/Confirm'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/player' element={<Player/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/detail" element={<Detailspage/>}/>
        <Route path="/confirm/:token" element={<Confirm/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </Router>    
  )
}

export default App

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import Player from './components/containes/player/Player'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/player' element={<Player/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </Router>    
  )
}

export default App

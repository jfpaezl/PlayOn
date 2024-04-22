import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import Player from './components/containes/player/Player'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import Detailspage from './pages/DetailPage'
import Confirm from './pages/Confirm'
import PrivateRoute from './utils/PrivateRoute'
import { useState } from 'react'

function App() {
  const [token] = useState(localStorage.getItem('token'))
  return (
    <Router>
      <Routes>
        {/**Rutas sin proteger */}
        <Route path="/confirm/:token" element={<Confirm/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        <Route path="/" element={<LoginPage/>}/>

        {/**Rutas protegidas */}
        <Route path="/home" element={<PrivateRoute component={HomePage} isAuthenticated={token? true: false} authenticationPath='/' />}/>
        <Route path="/profile" element={<PrivateRoute component={ProfilePage} isAuthenticated={token? true: false} authenticationPath='/' />}/>
        <Route path="/detail" element={<PrivateRoute component={Detailspage} isAuthenticated={token? true: false} authenticationPath='/' />}/>
        <Route path="/player" element={<PrivateRoute component={Player} isAuthenticated={token? true: false} authenticationPath='/' />}/>
        {/* <Route path="/profile" element={<ProfilePage/>}/> */}
        {/* <Route path='/player' element={<Player/>}/> */}
        {/* <Route path="/home" element={<HomePage/>}/> */}
        {/* <Route path="/detail" element={<Detailspage/>}/> */}

      </Routes>
    </Router>    
  )
}

export default App

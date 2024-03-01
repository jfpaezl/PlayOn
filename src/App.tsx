import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<ErrorPage/>}/>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </Router>    
  )
}

export default App

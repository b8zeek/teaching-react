import { Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import LoginWrapper from './wrapper/LoginWrapper'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <div className="App">
      <Header />
      <LoginWrapper>
        <Routes>
          <Route path='' element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
        </Routes>
      </LoginWrapper>
    </div>
  )
}

export default App

import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

import HomePage from './pages/HomePage'

function App() {

  return (
    <div className="App">
      <div style={{
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        background: 'rgba(255, 255, 255, .1)'
      }}>
        <Link to=''>Home</Link>
      </div>
      <Routes>
        <Route path='' element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App

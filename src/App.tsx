import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cheatsheets/authentication" element={<div>Authentication Cheat Sheet</div>} />
            <Route path="/cheatsheets/authorization" element={<div>Authorization Cheat Sheet</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App

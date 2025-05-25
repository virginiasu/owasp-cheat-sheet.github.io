import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import cheatSheetItems from './components/cheatSheetItems.json'

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <main className="main-content">
            <Routes>
            <Route path="/" element={<Home />} />
            {cheatSheetItems.map((item, index) => (
              <Route 
              key={`${index}-${item.title}`}
              path={item.path}
              element={<div>{item.title}</div>} 
              />
            ))}
            </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App

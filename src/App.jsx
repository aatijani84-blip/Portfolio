import './App.css'
import { Home } from './Pages/home'
import { Routes, Route } from 'react-router'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App

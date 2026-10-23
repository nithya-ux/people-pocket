
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SavedProfiles from './pages/SavedProfiles'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved" element={<SavedProfiles />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

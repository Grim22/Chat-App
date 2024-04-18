import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import '../src/Global.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'

import Home from './Home'
import Register from '../src/Components/Register'
import Login from './Login'

function App() {
  
 
  useEffect(() => {
    themeChange(false)
  });

  return (
    <>
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App

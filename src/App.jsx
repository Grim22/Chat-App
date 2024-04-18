import { useContext, useEffect } from 'react'
import { themeChange } from 'theme-change'
import '../src/Global.css'
import { BrowserRouter,Routes, Route, Navigate } from 'react-router-dom'

import Home from './Home'
import Register from './Register'
import Login from './Login'
import { AuthContext } from './AuthContext'

function App() {
  
 
  useEffect(() => {
    themeChange(false)
  });

  const {currentUser} = useContext(AuthContext)

  const ProtectedRoute = ({children}) => {
      if(!currentUser){
        return <Navigate to="/"/>
      }

      return children
  }

  return (
    <>
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<ProtectedRoute>
                                                <Home />
                                            </ProtectedRoute>} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App

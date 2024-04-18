import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import '../src/Global.css'

import Home from './Home'

function App() {
  
 
  useEffect(() => {
    themeChange(false)
  });

  return (
    <>
     <Home />
    </>
  )
}

export default App

import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  useEffect(() => {

    fetch('https://api.github.com/users/XFERRER7')
    .then()
    .catch(error => console.error(error))

  }, [])

  return (
    <div>
        
    </div>
  )
}

export default App

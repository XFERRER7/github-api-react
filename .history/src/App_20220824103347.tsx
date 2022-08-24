import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const [repos, setRepos] = useState({});

  useEffect(() => {

    fetch('https://api.github.com/users/XFERRER7/repos')
    .then(data => data.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))

  }, [])

  return (
    <div>
        
    </div>
  )
}

export default App

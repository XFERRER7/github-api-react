import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const [repos, setRepos] = useState({});

  useEffect(() => {


    const fetchData = async () => {
      const response = await fetch('https://api.github.com/users/XFERRER7/repos')
    }
   
    
    // .then(data => data.json())
    // .then(data => setRepos(data))
    // .catch(error => console.error(error)) 


    console.log(repos)
  }, [])

  return (
    <div>
        
    </div>
  )
}

export default App

import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const [repos, setRepos] = useState([{}]);

  useEffect(() => {


    const fetchData = async () => {
      const response = await fetch('https://api.github.com/users/XFERRER7/repos')
      const data = response.json();

      setRepos(await data)

    }

    fetchData()
    .catch(err => console.log(err))

  }, [])

  return (
    <div>
      <ul>
        {
        repos.map(repo => <li>{repo.}</li>)
      }
      </ul>
      
    </div>
  )
}

export default App

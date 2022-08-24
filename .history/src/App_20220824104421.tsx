import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


interface IrepoInfo {
  id: string;
  node_id: string;
  name: string;
  full_name: string;

}

function App() {

  const [repos, setRepos] = useState<IrepoInfo[]>([]);

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
        repos.map(repo => <li>{repo.full_name}</li>)
      }
      </ul>
      
    </div>
  )
}

export default App

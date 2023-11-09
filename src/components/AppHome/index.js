import {useState, useEffect} from 'react'
import Header from '../Header'
import GitRepo from '../GitRepo'

const AppHome = props => {
  const [data, setData] = useState([])
  console.log(props)

  useEffect(() => {
    const getGitRepos = async () => {
      const response = await fetch(
        'https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=2',
      )
      const fetchedData = await response.json()

      setData(fetchedData.items)
    }
    getGitRepos()
  }, [])

  return (
    <div className="app-container">
      <Header />
      <div className="repo-container">
        {data.map(eachItem => (
          <GitRepo eachItem={eachItem} key={eachItem.id} />
        ))}
      </div>
    </div>
  )
}

export default AppHome

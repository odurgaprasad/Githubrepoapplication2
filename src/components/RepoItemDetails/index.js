import {useState, useEffect} from 'react'
import './index.css'

const RepoItemDetails = props => {
  const [item, setItem] = useState([])

  console.log(props)

  useEffect(() => {
    const getOwnerData = async () => {
      const {match} = props
      const {params} = match
      const {owner, repo} = params
      const url = `https://api.github.com/repos/${owner}/${repo}`

      const response = await fetch(url)
      const data = await response.json()
      setItem(data)
    }

    getOwnerData()
  }, [])

  return (
    <div className="repo-item-container">
      <h3>Repository Details</h3>
      <p>{item.description}</p>
    </div>
  )
}

export default RepoItemDetails

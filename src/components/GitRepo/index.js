import {Link} from 'react-router-dom'
import './index.css'

const GitRepo = porps => {
  const {eachItem} = porps
  // const {stargazers_count} = eachItem

  const owner = eachItem.owner.login
  const repo = eachItem.name

  return (
    <Link to={`/repos/${owner}/${repo}`} className="link">
      <div className="repo-item">
        <div className="avatar-container">
          <img
            className="avatar"
            src={eachItem.owner.avatar_url}
            alt="avatar"
          />
        </div>
        <div className="repo-details-container">
          <h3 className="repo-name">{eachItem.name}</h3>
          <p className="description">{eachItem.description}</p>
          <div className="deatils-container">
            <div className="star-count-container">
              <span className="star-count">{eachItem.stargazers_count}</span>
            </div>
            <div className="star-count-container">
              <span className="open-issues">{eachItem.open_issues_count}</span>
            </div>
            <span className="published-at">
              Last published at {eachItem.pushed_at} by {eachItem.name}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default GitRepo

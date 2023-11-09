import {BrowserRouter, Switch, Route} from 'react-router-dom'
import AppHome from './components/AppHome'
import RepoItemDetails from './components/RepoItemDetails'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={AppHome} />
      <Route exact path="/repos/:owner/:repo" component={RepoItemDetails} />
    </Switch>
  </BrowserRouter>
)

export default App

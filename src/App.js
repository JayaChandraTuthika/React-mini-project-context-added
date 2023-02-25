import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import UserContext from './context/UserContext'
import LoginPage from './components/LoginPage'
import Home from './components/Home'
import Popular from './components/Popular'
import SearchPage from './components/SearchPage'
import Account from './components/Account'
import NotFound from './components/NotFound'
import MovieDetailsPage from './components/MovieDetailsPage'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

class App extends Component {
  state = {
    username: '',
    password: '',
  }

  changeUsername = val => {
    console.log(val)
    this.setState({username: val})
  }

  changePassword = val => {
    console.log(val)
    this.setState({password: val})
  }

  render() {
    const {username, password} = this.state
    return (
      <UserContext.Provider
        value={{
          username,
          password,
          changePassword: this.changePassword,
          changeUsername: this.changeUsername,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/popular" component={Popular} />
          <ProtectedRoute exact path="/search" component={SearchPage} />
          <ProtectedRoute exact path="/account" component={Account} />
          <ProtectedRoute
            exact
            path="/movies/:id"
            component={MovieDetailsPage}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </UserContext.Provider>
    )
  }
}
export default App

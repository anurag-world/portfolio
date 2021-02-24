import { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '../css/app.css'
import NavBar from '../components/Nav'
import Main from './home/Main'

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar name="Anurag World" />
        <Switch>
          <Route path="/" component={Main} exact />
        </Switch>
      </Router>
    )
  }
}

export default App

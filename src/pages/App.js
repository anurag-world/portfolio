import { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from '../components/Nav'
import Main from './home/Main'
import Footer from '../components/Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar name="Anurag V" />
        <Switch>
          <Route path="/" component={Main} exact />
        </Switch>
        <Footer />
      </Router>
    )
  }
}

export default App

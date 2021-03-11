import { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import NavBar from '../components/Nav'
import Main from './home/Main'
import UiDesign from './portfolio/UiDesign'
import Footer from '../components/Footer'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <NavBar name="Anurag V" />
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/ui" component={UiDesign} />
        </Switch>
        <Footer />
      </HashRouter>
    )
  }
}

export default App

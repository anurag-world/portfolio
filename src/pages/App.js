import "../css/app.css";
import Nav from "../components/Nav";
import Main from "./home/Main";
import { Component } from "react";
// import { FaPencilRuler } from "react-icons/fa";

class App extends Component {
  render() {
    return (
      <>
        <Nav name="Anurag World" />
        <Main />
      </>
    );
  }
}

export default App;

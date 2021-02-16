import "../css/app.css";
import Nav from "../components/Nav";
import Header from "./home/Header";
import SectionOne from "./home/SectionOne";
import SectionTwo from "./home/SectionTwo";
// import { FaPencilRuler } from "react-icons/fa";

export default function App() {
  return (
    <>
      <Nav name="Anurag World" />
      <Header />
      <SectionOne />
      <SectionTwo />
    </>
  );
}

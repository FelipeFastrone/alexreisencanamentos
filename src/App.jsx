import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer";

import Home from "./components/pages/Home";
import Encanamento from "./components/pages/Encanamento";
import Esgoto from "./components/pages/Esgoto";
import Ferro from "./components/pages/Ferro";
import CacaVazamento from "./components/pages/CacaVazamento";
import Cobre from "./components/pages/Cobre";
import BtnWhats from "./components/buttons/BtnWhats";


export default function App() {
  return (
    <div id="App">
      <Router>
        <Navbar />

        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Esgoto" element={<Esgoto />}/>
            <Route path="/Ferro" element={<Ferro />}/>
            <Route path="/Encanamento" element={<Encanamento />}/>
            <Route path="/CacaVazamento" element={<CacaVazamento />}/>
            <Route path="/Cobre" element={<Cobre />}></Route>
          </Routes>
        </Container>
        <BtnWhats/>
        <Footer/>
      </Router>
    </div>
  );
}

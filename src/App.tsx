import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/index";
import Home from "./components/Home/index";
import About from "./components/About/index";
import Contact from "./components/Contact/index"; 
import Portfolio from "./components/Portfolio/index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
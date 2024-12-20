import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/page";
import About from "./about/page";
import Contact from "./contact/page";
import { LenisProvider } from "./context/smooth-scroll";
import Footer from "./components/kit/footer";

function App() {
  return (


    <LenisProvider>

      <Router>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer/>


      </Router>
    </LenisProvider>
   

    


  );
}

export default App;

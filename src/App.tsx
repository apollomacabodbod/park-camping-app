import {  Routes, Route , useLocation} from "react-router-dom";
import Home from "./home/page";
import { LenisProvider } from "./context/smooth-scroll";
import Footer from "./components/kit/footer";
import Header from "./components/kit/header";
import ServicesStaff from "./staff/page";
import ScrollToTop from "./components/kit/scroll-top";
import Camping from "./camping/page";
import About from "./about/page";
import Blog from "./blog/page";
import SingleBlog from "./blog/single-blog/page";
import { useEffect } from "react";

function App() {


  const location = useLocation(); // Now safe to use because it's inside a Router

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (


    <LenisProvider>

      <ScrollToTop/>


      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesStaff />} />
        <Route path="/camping" element={<Camping />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
      </Routes>


      <div key={location.pathname}>

        <Footer/>
        
      </div>

       


    </LenisProvider>
   

    


  );
}

export default App;

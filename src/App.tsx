import {  Routes, Route , useLocation} from "react-router-dom";
import Home from "./home/page";
import { LenisProvider } from "./context/smooth-scroll";
import Footer from "./components/kit/footer";
import ServicesStaff from "./staff/page";
import ScrollToTop from "./components/kit/scroll-top";
import Camping from "./camping/page";
import About from "./about/page";
import Blog from "./blog/page";
import SingleBlog from "./blog/single-blog/page";
import { useEffect } from "react";
import Contact from "./contact/page";
import MainLayout from "./layouts/main-layout";
import FooterLayout from "./layouts/footer-layout";
import NotFound from "./components/kit/not-found";

function App() {


  const location = useLocation(); // Now safe to use because it's inside a Router


  return (


    <LenisProvider>

      <ScrollToTop/>


    

      <Routes>

        <Route element={<MainLayout />}>
        
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesStaff />} />
          <Route path="/camping" element={<Camping />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/contact" element={<Contact />} />

        </Route>

        <Route element={<FooterLayout />}>

          <Route path="*" element={<NotFound />}/>

        </Route>

        
        
      </Routes>

      <div key={location.pathname}>
        <Footer/>
      </div>
     

       


    </LenisProvider>
   

    


  );
}

export default App;

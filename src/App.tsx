import {  Routes, Route , useLocation} from "react-router-dom";
import Home from "./home/page";
import Contact from "./contact/page";
import { LenisProvider } from "./context/smooth-scroll";
import Footer from "./components/kit/footer";
import Header from "./components/kit/header";
import ServicesStaff from "./staff/page";
import ScrollToTop from "./components/kit/scroll-top";

function App() {


  const location = useLocation(); // Now safe to use because it's inside a Router



  return (


    <LenisProvider>

      <ScrollToTop/>


      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesStaff />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>


      <div key={location.pathname}>

        <Footer/>
        
      </div>

       


    </LenisProvider>
   

    


  );
}

export default App;

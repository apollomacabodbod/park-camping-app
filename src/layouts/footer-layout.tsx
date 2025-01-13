import { Outlet } from "react-router-dom";
import FooterHeader from "../components/kit/footer-header";




export default function FooterLayout(){

  return(<>

    <FooterHeader/>
    <Outlet />
    
    
  </>)
}
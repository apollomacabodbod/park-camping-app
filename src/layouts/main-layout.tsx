import { Outlet } from "react-router-dom";
import Header from "../components/kit/header";
import ScrollToTop from "../components/kit/scroll-top";




export default function MainLayout(){

  return(<>


    <Header/>
   
    <Outlet />
    
    
  </>)
}
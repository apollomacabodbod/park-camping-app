import { Outlet } from "react-router-dom";
import Header from "../components/kit/header";




export default function MainLayout(){

  return(<>


    <Header/>
   
    <Outlet />
    
    
  </>)
}
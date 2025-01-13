import { Outlet } from "react-router-dom";
import CustomHeader from "../components/kit/CustomHeader";




export default function FooterLayout(){

  return(<>

    <CustomHeader/>
    <Outlet />
    
    
  </>)
}
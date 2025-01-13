import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./side-bar-menu";



export default function CustomHeader(){



  const [scrolling, setScrolling] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window.scrollY > 0;
      setScrolling(isScrolling);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (<>



    <div  className={`fixed top-0 left-0 w-full bg-[rgba(16,34,29,0.60)]/40 backdrop-blur-lg  shadow-lg transition-all duration-1000 ease-in-out z-40 
    `}>



      <div className="flex flex-col max-w-[1200px] lg:mx-auto py-[1.2em] px-[1.25em] ">



        <div className="flex items-center justify-between">



          <div className="flex flex-col">

            <div className="flex items-center justify-center">

              <Link to={"/"} className="cursor-pointer"><img src="/logo.svg" alt=""  /></Link>
              

            </div>


          </div>




          <div className="lg:flex lg:flex-col hidden">


            <div className="flex items-cener lg:gap-[1.5em] xl:gap-[2em]">


              <Link  to="" className="text-white focus:text-[#F4EEA9] active:text-[#F4EEA9] font-roboto text-[0.9375rem] not-italic font-bold uppercase" > Home</Link>
              <Link  to="/services" className="text-white  focus:text-[#F4EEA9] active:text-[#F4EEA9] font-roboto text-[0.9375rem] not-italic font-bold uppercase" > services</Link>
              <Link  to="/camping" className="text-white focus:text-[#F4EEA9] active:text-[#F4EEA9] font-roboto text-[0.9375rem] not-italic font-bold uppercase" > camping</Link>
              <Link  to="/about" className="text-white focus:text-[#F4EEA9] active:text-[#F4EEA9] font-roboto text-[0.9375rem] not-italic font-bold uppercase" > about</Link>
              <Link  to="/blog" className="text-white focus:text-[#F4EEA9] active:text-[#F4EEA9] font-roboto text-[0.9375rem] not-italic font-bold uppercase" > blog</Link>
              <Link  to="/contact" className="text-white focus:text-[#F4EEA9] active:text-[#F4EEA9] font-roboto text-[0.9375rem] not-italic font-bold uppercase" > contact</Link>



            </div>




          </div>





          <div className="lg:flex lg:flex-col hidden">



            <div className="flex items-center lg:gap-[1.5em] xl:gap-[2em]">


              <div className="flex flex-col">



                <div className="flex items-center gap-[0.625em]">

                  <p className="text-[#F4EEA9] font-roboto text-[0.9375rem] not-italic font-bold uppercase">021 3456 789</p>
                  <img src="/header-telephone.svg" alt="" />
                </div>

              </div>



              <div className="flex flex-col border  border-[#F4EEA9] rounded-[0.25em] transition-opacity duration-1000 ease-in-out active:scale-95 active:transition-transform active:duration-200 active:ease-out cursor-pointer">


                <div className="flex items-center gap-[0.625em] py-[1em] px-[2em]">

                  <p className="font-roboto text-[#F4EEA9] text-[0.9375rem] font-bold uppercase">Book now</p>

                  <img src="/home-learn-more.svg" alt="" width={14}/>


                </div>



              </div>




            </div>





   






   






          </div>




          <div className="flex flex-col lg:hidden "
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >


            <div className="flex items-center">

              <img src="/humberger.svg" alt="home-header-humberger" width={23} height={0} className="cursor-pointer" />

            </div>

          
          </div>






        </div>



      



      
      

      


      </div>





    </div>



    {/* Overlay */}
    {sidebarOpen && (
      <div
        className="fixed inset-0 bg-black opacity-50 z-40"
        onClick={() => setSidebarOpen(false)} // Close sidebar on overlay click
      />
    )}

    {/* Sidebar */}
    <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />


 


    
    
  </>)
}
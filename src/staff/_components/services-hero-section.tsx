
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


export default function ServicesHeroSection(){


  return(<>


    <div className="z-10 flex flex-col max-w-[1200px] lg:mx-auto px-[1.25em] my-[9em] border border-[#50B498] green">

      <div className="flex items-baseline  gap-[0.625em] ">

        <motion.img src="/home-ranger-camp.svg" alt="" width={27}  className="transition-all duration-1000 ease-in-out "

          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0, ease: "easeInOut" }, // Applying duration and easing
            },
          }}
  


        />

        <motion.p className="text-[#F4EEA9]  font-roboto text-[0.9375rem] not-italic font-bold uppercase transition-all duration-1000 ease-in-out"


          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0, ease: "easeInOut" }, // Applying duration and easing
            },
          }}
  

        >ranger camp</motion.p>

        <motion.img src="/home-ranger-camp.svg" alt="" width={27} className="transition-all duration-1000 ease-in-out"

          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0, ease: "easeInOut" }, // Applying duration and easing
            },
          }}
  

        />



      </div>


      <p className="text-white text-center font-roboto text-[4.5rem] not-italic font-bold leading-[1em]">Our Staff</p>



      <div className="flex items-baseline justify-center gap-[1em] mt-[2em]">


        <img src="/services-home.svg" alt="" />


        <Link to={"/"} className="text-white font-roboto text-[0.9375rem] not-italic font-bold uppercase"> Home</Link>



        <img src="/services-arrow.svg" alt="" />


        <Link to={"/services"} className="text-white font-roboto text-[0.9375rem] not-italic font-bold uppercase"> our staff</Link>




      </div>



    </div>
    
    
    
  </>)
}
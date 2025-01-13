
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function NotFound(){


  return(<>

    


    <div className="flex flex-col max-w-[1200px] lg:mx-auto px-[1.25em]  items-center justify-center min-h-screen ">



      <div className="fle flex-col mt-[9em] mb-[3em]">




        <motion.div className="flex items-center justify-center gap-[0.625em] transition-all duration-1000 ease-in-out"
      
      
      
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
    
        >


          <img src="/home-places.svg" alt="" />

          <p className="text-[#CA6702] leading-normal font-open-sans tracking-[0.125em] text-[0.9375rem] not-italic font-bold uppercase">page not found</p>

          <img src="/home-places.svg" alt="" />


        </motion.div>


        <motion.p className="text-[#333] font-roboto text-[4.5rem] not-italic font-bold text-center transition-all duration-1000 ease-in-out"
    
    
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
    
    
        >404</motion.p>



        <motion.p className="text-center font-roboto text-[0.9375rem] not-italic font-normal mt-[2em] transition-all duration-1000 ease-in-out"
      
      
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
    
    
    
        >Somethings gone missing. Sorry, we couldn’t find the page you are looking for.</motion.p>




        <motion.div className=" cursor-pointer transition-all duration-1000 ease-in-out"
    
    
    
        
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
  
  
  
        >

          <Link to={"/"} className="flex flex-col bg-[#389844] mt-[2em]">

            <div className="flex items-center justify-center py-[1em] px-[2em] rounded-[0.25em] gap-[0.625em]">

              <p className="text-white font-roboto text-[0.9375rem] not-italic font-bold capitalize">back to home</p>
              <img src="/single-blog-arrow.svg" alt="" />

            </div>

          </Link >

        </motion.div>







      </div>



    </div>
    
  </>)
}

import { motion } from "framer-motion"


export default function AboutRecognitionsCards(){


  return(<>
    

    <div className="grid grid-cols-2  mt-[2.125em] gap-[1.875em] " >


      <div className="flex flex-col ">


        <motion.div className="flex items-center justify-center transition-all duration-1000 ease-in-out"
        
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

          <img src="/home-recognition-card1.svg" alt="" />


        </motion.div>


        <motion.p className="text-center mt-[1em] font-roboto text-[0.9375rem] not-italic font-normal text-[#333] transition-all duration-1000 ease-in-out"
        
        
        
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
        
        
        >Best Camping Spot</motion.p>


      </div>




      <div className="flex flex-col ">


        <motion.div className="flex items-center justify-center transition-all duration-1000 ease-in-out"
        
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

          <img src="/home-recognition-card2.svg" alt="" />


        </motion.div>


        <motion.p className="text-center mt-[1em] font-roboto text-[0.9375rem] not-italic font-normal text-[#333] transition-all duration-1000 ease-in-out"
        
        
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
        
        
        >Innovative State Park</motion.p>


      </div>



      <div className="flex flex-col ">


        <motion.div className="flex items-center justify-center transition-all duration-1000 ease-in-out"
        
        
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

          <img src="/home-recognition-card3.svg" alt="" />


        </motion.div>


        <motion.p className="text-center mt-[1em] font-roboto text-[0.9375rem] not-italic font-normal text-[#333] transition-all duration-1000 ease-in-out"
        
        
          
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
        
        
        >Top 5 Urban Camp</motion.p>


      </div>




      <div className="flex flex-col ">


        <motion.div className="flex items-center justify-center transition-all duration-1000 ease-in-out"
        
        
        
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

          <img src="/home-recognition-card4.svg" alt="" />


        </motion.div>


        <motion.p className="text-center mt-[1em] font-roboto text-[0.9375rem] not-italic font-normal text-[#333] transition-all duration-1000 ease-in-out"
        
        
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
        
        
        >Vote best staycation</motion.p>


      </div>




    </div>


    
  </>)
}


import { motion } from "framer-motion"

export default function ContactInfoCards(){


  return(<>

    <div className="grid lg:grid-cols-3 gap-[1.875em]  lg:px-[5.625em] lg:relative lg:top-[-5.375em]">



      <div className="flex flex-col  p-[2em] bg-white rounded-[0.25em] mt-[1.875em] lg:mt-[0em]" >


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

          <img src="/contact-info-address.svg" alt="" />


        </motion.div>


        <motion.p className="text-center mt-[1em] text-[#333] font-roboto text-[1.125rem] not-italic font-semibold transition-all duration-1000 ease-in-out" 
        
        
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
        
        
        
        >Address</motion.p>
        <motion.p className="text-center text-[#333] font-inter not-italic font-normal transition-all duration-1000 ease-in-out"
        
        
        
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
        
        
        >021 Hollywood Boulevard, LA</motion.p>



      </div>



      <div className="flex flex-col  p-[2em] bg-white rounded-[0.25em]" >


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

          <img src="/contact-info-email.svg" alt="" />


        </motion.div>


        <motion.p className="text-center mt-[1em] text-[#333] font-roboto text-[1.125rem] not-italic font-semibold transition-all duration-1000 ease-in-out " 
        
        
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
        
        
        
        
        >Email</motion.p>
        <motion.p className="text-center text-[#333] font-inter not-italic font-normal transition-all duration-1000 ease-in-out"
        
        
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
        
        
        
        
        >customer@example.com</motion.p>



      </div>



      <div className="flex flex-col  p-[2em] bg-white rounded-[0.25em]" >


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

          <img src="/contact-info-phone.svg" alt="" />


        </motion.div>


        <motion.p className="text-center mt-[1em] text-[#333] font-roboto text-[1.125rem] not-italic font-semibold  transition-all duration-1000 ease-in-out" 
        
        
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
        
        
        
        
        >Phone</motion.p>
        <motion.p className="text-center text-[#333] font-inter not-italic font-normal transition-all duration-1000 ease-in-out"
        
        
        
           
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
        
        
        
        
        
        >(021) 345-6789</motion.p>



      </div>



    </div>
    
    
  </>)
}
import HomeCampingLearn from "./home-camping-learn";

import { motion } from "framer-motion"

export default function HomeCampingGround(){


  return (<>


    <div className="relative flex flex-col bg-cover bg-center  mt-[7.625em] pt-[5.0625em] pb-[5.5625em] pl-[2em] pr-[2em] lg:pl-[3.875em] lg:pr-[4.1875em] rounded-[0.25em] overflow-hidden"
    
    
      style={{
        backgroundImage: 'url(/camping-with-red.jpg)'
      }}
    
    >


      <div className="absolute inset-0 bg-[rgba(16,34,29,0.60)] opacity-60"></div>




      <motion.p className="z-10 text-[#F4EEA9] font-open-sans text-[0.9375rem] not-italic font-bold tracking-[0.125em] uppercase transition-all duration-1000 ease-in-out"
      
      
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
      
      
      >camping</motion.p>

      <HomeCampingLearn/>
   
   
    </div>

   
    
    
  </>)
}
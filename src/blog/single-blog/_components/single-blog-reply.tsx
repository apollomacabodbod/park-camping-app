

import { motion } from "framer-motion"

export default function SingleBlogReply(){


  return(<>


    <div className="flex flex-col mt-[3.996875em]">


      <motion.p className="text-center text-[#333] font-roboto text-[1.125rem] not-italic font-semibold transition-all duration-1000 ease-in-out"
      
      
      
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
      
      
      >Leave a reply</motion.p>

      <motion.p className="text-center text-[#333] font-roboto text-[0.9375rem] not-italic font-normal mt-[0.5em] transition-all duration-1000 ease-in-out"
      
      
      
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
      
      
      
      >Your email address will not be published. Required fields are marked *</motion.p>

    </div>
    
    
  </>)
}
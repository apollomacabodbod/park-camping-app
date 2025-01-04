
import { motion } from "framer-motion"

export default function HomeRecognitions(){


  return(<>


    <div className="flex flex-col mt-[6.25em]">


      <motion.p className="text-center font-roboto text-[1.125rem] not-italic font-semibold leading-normal text-[#333] transition-all duration-1000 ease-in-out"
      
      
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
      
      >Our Recognitions</motion.p>


    </div>
    
    
  </>)
}
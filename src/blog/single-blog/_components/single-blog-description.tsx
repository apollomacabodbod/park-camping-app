import { motion } from "framer-motion"

export default function SingleBlogDescription(){


  return (<>


    <div className="flex flex-col mt-[2em]">

      <motion.p className="text-[#1E334B] font-roboto text-[1.125rem] not-italic font-semibold transition-all duration-1000 ease-in-out"
      
      
       
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
      
      >“Bibendum sit pharetra vitae pellentesque sodales neque mollis orc”</motion.p>


    </div>
    
  </>)
}
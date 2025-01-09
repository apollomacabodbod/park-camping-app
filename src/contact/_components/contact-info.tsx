
import { motion } from "framer-motion"

export default function ContactInfo(){


  return (<>


    <div className="flex flex-col mt-[4em]">


      <div className="flex items-center border border-[#50B498] green">


        <motion.img src="/camping-in.jpg" alt="" className="w-full h-[28.125em] object-cover rounded-[0.25em] transition-all duration-1000 ease-in-out "
        
        
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


    </div>
    
    
  </>)
}
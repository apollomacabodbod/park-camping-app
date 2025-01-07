

import { motion } from "framer-motion";


export default function AboutStatsCards(){


  return(<>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 mt-[1.875em] gap-[1.875em]">

      <motion.div className="flex flex-col py-[1em] px-[1em] bg-[#389844] rounded-[0.25em] transition-all duration-1000 ease-in-out"


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

        <motion.p className="text-white text-center font-roboto text-[2.25rem] not-italic font-semibold transition-all duration-1000 ease-in-out"
  
  
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
  
  
        >105+</motion.p> 

        <motion.p className="text-center font-roboto text-[0.75rem] font-normal leading-normal text-[#F4EEA9] transition-all duration-1000 ease-in-out"
  
  
    
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
  
  
  
        >Campsites</motion.p>


      </motion.div>


      <motion.div className="flex flex-col py-[1em] px-[1em] bg-[#389844] rounded-[0.25em] transition-all duration-1000 ease-in-out"


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

        <motion.p className="text-white text-center font-roboto text-[2.25rem] not-italic font-semibold transition-all duration-1000 ease-in-out"
  
  
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
  
  
  
        >30+</motion.p> 

        <motion.p className="text-center font-roboto text-[0.75rem] font-normal leading-normal text-[#F4EEA9] transition-all duration-1000 ease-in-out"
  
  
  
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
  
  
        >Campsites</motion.p>


      </motion.div>



      <motion.div className="flex flex-col py-[1em] px-[1em] bg-[#389844] rounded-[0.25em] transition-all duration-1000 ease-in-out" 


  
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

        <motion.p className="text-white text-center font-roboto text-[2.25rem] not-italic font-semibold transition-all duration-1000 ease-in-out"
  
  
  
     
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

  
        >1,3M</motion.p> 

        <motion.p className="text-center font-roboto text-[0.75rem] font-normal leading-normal text-[#F4EEA9] transition-all duration-1000 ease-in-out"
  
  
  
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
  
        >Reservations</motion.p>


      </motion.div>




      <motion.div className="flex flex-col py-[1em] px-[1em] bg-[#389844] rounded-[0.25em] transition-all duration-1000 ease-in-out"



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

        <motion.p className="text-white text-center font-roboto text-[2.25rem] not-italic font-semibold transition-all duration-1000 ease-in-out"
  
  
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
  
  
        >70+</motion.p> 

        <motion.p className="text-center font-roboto text-[0.75rem] font-normal leading-normal text-[#F4EEA9] transition-all duration-1000 ease-in-out"
  
  
  
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
  
        >Year of camping</motion.p>


      </motion.div>












    </div>

    
  </>)
}
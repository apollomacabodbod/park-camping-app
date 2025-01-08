

import { motion } from "framer-motion"

export default function SingleBlogUpdatesCards(){


  return (<>


    <div className="grid grid-cols-1 sm:grid-cols-3 mt-[3.989375em] gap-[1.875em] mb-[4.6175em]">


      <div className="flex flex-col ">




        <motion.img src="/camping-2023.jpg" alt="" className="h-[12.5em] object-cover rounded-[0.25em] transition-all duration-1000 ease-in-out"
        
        
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



        <motion.p className="text-[rgba(16,34,29,0.60)] font-open-sans text-[0.75rem] mt-[1em] font-normal leading-normal transition-all duration-1000 ease-in-out"
        
        
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
        
        
        
        >December 30, 2021  No Comments</motion.p>

        <motion.p className="text-[#333] font-roboto text-[1.125rem] not-italic font-semibold mt-[0.05em] transition-all duration-1000 ease-in-out"
        
        
          
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
        
        
        
        >Nullam semper etiam congue lacinia</motion.p>


        <motion.p className="text-[#333] font-inter not-italic font-normal text-[0.9375rem] mt-[1em] transtion-all duration-1000 ease-in-out"
        
        
        
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
        
        
        >Nullam semper etiam congue lacinia nuncesit quam vel vestibulum faucibus dolor semper.</motion.p>



        <motion.div className="flex items-center mt-[1em] gap-[0.625em] transition-all duration-1000 ease-in-out"
        
        
        
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


          <p className="text-[#389844] font-roboto text-[0.9375rem] not-italic font-bold capitalize ">Read More</p>

          <img src="/home-updates-arrow.svg" alt="" />


        </motion.div>


      </div>




      <div className="flex flex-col ">




        <motion.img src="/camping-with-red.jpg" alt="" className="h-[12.5em] object-cover rounded-[0.25em] transition-all duration-1000 ease-in-out"
        
        
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



        <motion.p className="text-[rgba(16,34,29,0.60)] font-open-sans text-[0.75rem] mt-[1em] font-normal leading-normal transtion-all duration-1000 ease-in-out"
        
        
        
          
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
        
        
        
        
        >December 30, 2021  No Comments</motion.p>

        <motion.p className="text-[#333] font-roboto text-[1.125rem] not-italic font-semibold mt-[0.05em] transition-all duration-1000 ease-in-out"
        
        
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
        
        
        
        
        >Nullam semper etiam congue lacinia</motion.p>


        <motion.p className="text-[#333] font-inter not-italic font-normal text-[0.9375rem] mt-[1em] transition-all duration-1000 ease-in-out"
        
        
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
        
        
        
        >Nullam semper etiam congue lacinia nuncesit quam vel vestibulum faucibus dolor semper.</motion.p>



        <motion.div className="flex items-center mt-[1em] gap-[0.625em] transition-all duration-1000 ease-in-out"
        
        
        
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


          <p className="text-[#389844] font-roboto text-[0.9375rem] not-italic font-bold capitalize ">Read More</p>

          <img src="/home-updates-arrow.svg" alt="" />


        </motion.div>


      </div>






      <div className="flex flex-col ">




        <motion.img src="/camping-mornings.jpg" alt="" className="h-[12.5em] object-cover rounded-[0.25em] transition-all duration-1000 ease-in-out"
        
        
        
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



        <motion.p className="text-[rgba(16,34,29,0.60)] font-open-sans text-[0.75rem] mt-[1em] font-normal leading-normal transition-all duration-1000 ease-in-out"
        
        
        
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
        
        
        
        >December 30, 2021  No Comments</motion.p>

        <motion.p className="text-[#333] font-roboto text-[1.125rem] not-italic font-semibold mt-[0.05em] transition-all duration-1000 ease-in-out"
        
        
        
        
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
        
        
        >Nullam semper etiam congue lacinia</motion.p>


        <motion.p className="text-[#333] font-inter not-italic font-normal text-[0.9375rem] mt-[1em] transition-all duration-1000 ease-in-out"
        
        
        
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
        
        
        
        >Nullam semper etiam congue lacinia nuncesit quam vel vestibulum faucibus dolor semper.</motion.p>



        <motion.div className="flex items-center mt-[1em] gap-[0.625em] transition-all duration-1000 ease-in-out"
        
        
          
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


          <p className="text-[#389844] font-roboto text-[0.9375rem] not-italic font-bold capitalize ">Read More</p>

          <img src="/home-updates-arrow.svg" alt="" />


        </motion.div>


      </div>




    </div>
    
  </>
  )
}
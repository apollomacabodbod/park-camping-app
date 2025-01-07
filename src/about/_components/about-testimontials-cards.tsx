

import { motion } from "framer-motion"

export default function AboutTestimontialsCards(){

  return (<>


    <div className="grid grid-cols-1 md:grid-cols-3 mb-[6.375em]">


      <div className="flex flex-col  py-[4.59375em] px-[2em]">

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

          <img src="/home-testimontials-quotes.svg" alt="" />

        </motion.div>


        <motion.div className="flex items-center justify-center mt-[1em] transition-all duration-1000 ease-in-out"
        
        
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


          <img src="/home-testimontials-rating.svg" alt="" />



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
        
        >“Rangers are so much fun”</motion.p>

        <motion.p className="text-center mt-[1em] text-[#333] font-inter text-[0.9375rem] font-normal transition-all duration-1000 ease-in-out"
        
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
        
        
        >Pretium quam lacus interdum ultrices velit elementum idicul netus faucibus. Venenatis quam diam nisi id at amet, mi at auctor onec vestibulum</motion.p>
       
        <motion.p className="text-center mt-[1em] font-roboto text-[0.9375rem] not-italic font-bold capitalize transition-all duration-1000 ease-in-out"
        
        
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
        
        
        >Peter Harvey</motion.p>
       
        <motion.p className="text-center mt-[0.5em] text-[rgba(16,34,29,0.60)] font-open-sans text-[0.75rem] not-italic font-normal transition-all duration-1000 ease-in-out"
        
        
        
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
        
        
        
        >Business</motion.p>
        
       
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

          <img src="/home-testimontials-user1.png" alt="" className="rounded-full"/>


        </motion.div>


       
      </div>




      <div className="flex flex-col py-[2em] px-[2em] bg-[#333]">

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

          <img src="/home-testimontials-card-green.svg" alt="" />

        </motion.div>


        <motion.div className="flex items-center justify-center mt-[1em] transition-all duration-1000 ease-in-out"
        
        
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


          <img src="/home-testimontials-rating.svg" alt="" />



        </motion.div>

        <motion.p className="text-white text-center mt-[1em]  font-roboto text-[1.125rem] not-italic font-semibold transition-all duration-1000 ease-in-out"
        
        
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
        
        
        >“Rangers are so much fun”</motion.p>

        <motion.p className="text-center mt-[1em] text-white font-open-sans text-[1.2rem] font-normal leading-normal transition-all duration-1000 ease-in-out"
        
        
        
         
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
        
        
        >Pretium quam lacus interdum ultrices velit elementum idicul netus faucibus. Venenatis quam diam nisi id at amet, mi at auctor onec vestibulum</motion.p>

        <motion.p className="text-center mt-[1em] text-white font-roboto text-[0.9375rem] not-italic font-bold capitalize transition-all duration-1000 ease-in-out"
        
        
        
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
        
        >Peter Harvey</motion.p>

        <motion.p className="text-center mt-[0.5em] text-white font-open-sans text-[0.75rem] not-italic font-normal transition-all duration-1000 ease-in-out"
        
        
        
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
        
        
        
        >Business</motion.p>


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

          <img src="/home-testimontials-user1.png" alt="" className="rounded-full " />


        </motion.div>



      </div>






      <div className="flex flex-col  py-[4.59375em] px-[2em]">

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

          <img src="/home-testimontials-quotes.svg" alt="" />

        </motion.div>


        <motion.div className="flex items-center justify-center mt-[1em] transition-all duration-1000 ease-in-out"
        
        
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


          <img src="/home-testimontials-rating.svg" alt="" />



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
        
        
        
        >“Rangers are so much fun”</motion.p>

        <motion.p className="text-center mt-[1em] text-[#333] font-inter text-[0.9375rem] font-normal transition-all duration-1000 ease-in-out"
        
        
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
        
        
        
        
        >Pretium quam lacus interdum ultrices velit elementum idicul netus faucibus. Venenatis quam diam nisi id at amet, mi at auctor onec vestibulum</motion.p>

        <motion.p className="text-center mt-[1em] font-roboto text-[0.9375rem] not-italic font-bold capitalize transition-all duration-1000 ease-in-out"
        
        
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
        
        
        
        >Peter Harvey</motion.p>

        <motion.p className="text-center mt-[0.5em] text-[rgba(16,34,29,0.60)] font-open-sans text-[0.75rem] not-italic font-normal transition-all duration-1000 ease-in-out"
        
        
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
        
        
        
        
        >Business</motion.p>


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

          <img src="/home-testimontials-user1.png" alt="" className="rounded-full"/>


        </motion.div>



      </div>






    </div>
    
    
  </>)
}
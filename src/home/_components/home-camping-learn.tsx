
import { motion } from "framer-motion"

export default function HomeCampingLearn(){


  return(<>



    <div className="z-10 flex flex-col">


      <div className="lg:flex lg:items-center lg:justify-between">


        <div className="flex flex-col ">


          <motion.p className="text-white font-roboto text-[2.25rem] not-italic font-semibold leading-[1em] mt-[0.5em]  lg:mt-[0.3em] transition-all duration-1000 ease-in-out"
          
            
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
          
          
          >Your Best Camping Ground</motion.p>

          <motion.p className="text-white font-inter not-italic font-normal max-w-[37.125em] mt-[1em] transition-all duration-1000 ease-in-out"
          
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
              
          
          
          
          >Nullam semper etiam congue lacinia nunc, sit. Quam vel vestibulum
faucibus dolor non semper leo quis. Pretium quam lacus.</motion.p>



        </div>



        <motion.div className="flex items-center mt-[1.5em] lg:mt-[0em] transition-all duration-1000 ease-in-out"
        
        
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

          <div className="flex flex-col border  border-[#F4EEA9] rounded-[0.25em] transition-opacity duration-1000 ease-in-out active:scale-95 active:transition-transform active:duration-200 active:ease-out cursor-pointer">


            <div className="flex items-center gap-[0.625em] py-[1em] px-[2em]">

              <p className="font-roboto text-[#F4EEA9] text-[0.9375rem] font-bold uppercase">Learn more</p>

              <img src="/home-learn-more.svg" alt="" width={14}/>


            </div>


          </div>


        </motion.div>







      </div>


  





    </div>









    
    
  </>)
}
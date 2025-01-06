
import { motion } from "framer-motion"

export default function CampingPlacesCards(){

  return(<>


    <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-[1.875em]  mt-[4em]  ">


      <div className="flex flex-col ">

        <motion.div className="flex items-center transition-all duration-1000 ease-in-out"
        
        
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

          <img src="/camping-tent.jpg" alt=""  className="w-full  h-[20.625em] rounded-[0.25em] object-cover"/>

        </motion.div>


        <motion.div className="flex items-center justify-between mt-[1em] transition-all duration-1000 ease-in-out"
        
        
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

          <p className="text-[#333] font-roboto text-[1.125rem] not-italic font-semibold ">Lake</p>


          <img src="/home-places-rating.svg" alt="" />



        </motion.div>


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
        
        
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</motion.p>



      </div>







      <div className="flex flex-col ">

        <motion.div className="flex items-center transition-all duration-1000 ease-in-out"


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

          <img src="/log-cabin-vintage.jpg" alt=""  className="w-full  h-[20.625em] rounded-[0.25em] object-cover"/>

        </motion.div>


        <motion.div className="flex items-center justify-between mt-[1em] transition-all duration-1000 ease-in-out"


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

          <p className="text-[#333] font-roboto text-[1.125rem] not-italic font-semibold ">Lake</p>


          <img src="/home-places-rating.svg" alt="" />



        </motion.div>


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


        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</motion.p>



      </div>




  

      <div className="flex flex-col ">

        <motion.div className="flex items-center transition-all duration-1000 ease-in-out"


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

          <img src="/dome-tents.jpg" alt=""  className="w-full  h-[20.625em] rounded-[0.25em] object-cover"/>

        </motion.div>


        <motion.div className="flex items-center justify-between mt-[1em] transition-all duration-1000 ease-in-out"


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

          <p className="text-[#333] font-roboto text-[1.125rem] not-italic font-semibold ">Lake</p>


          <img src="/home-places-rating.svg" alt="" />



        </motion.div>


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


        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</motion.p>



      </div>





    
      <div className="flex flex-col ">

        <motion.div className="flex items-center transition-all duration-1000 ease-in-out"


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

          <img src="/love-couple-relaxing.jpg" alt=""  className="w-full  h-[20.625em] rounded-[0.25em] object-cover"/>

        </motion.div>


        <motion.div className="flex items-center justify-between mt-[1em] transition-all duration-1000 ease-in-out"


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

          <p className="text-[#333] font-roboto text-[1.125rem] not-italic font-semibold ">Lake</p>


          <img src="/home-places-rating.svg" alt="" />



        </motion.div>


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


        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</motion.p>



      </div>





      <div className="flex flex-col ">

        <motion.div className="flex items-center transition-all duration-1000 ease-in-out"


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

          <img src="/smiling-kids.jpg" alt=""  className="w-full  h-[20.625em] rounded-[0.25em] object-cover"/>

        </motion.div>


        <motion.div className="flex items-center justify-between mt-[1em] transition-all duration-1000 ease-in-out"


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

          <p className="text-[#333] font-roboto text-[1.125rem] not-italic font-semibold ">Lake</p>


          <img src="/home-places-rating.svg" alt="" />



        </motion.div>


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


        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</motion.p>



      </div>







      <div className="flex flex-col ">

        <motion.div className="flex items-center transition-all duration-1000 ease-in-out"


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

          <img src="/a-father.jpg" alt=""  className="w-full  h-[20.625em] rounded-[0.25em] object-cover"/>

        </motion.div>


        <motion.div className="flex items-center justify-between mt-[1em] transition-all duration-1000 ease-in-out"


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

          <p className="text-[#333] font-roboto text-[1.125rem] not-italic font-semibold ">Lake</p>


          <img src="/home-places-rating.svg" alt="" />



        </motion.div>


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


        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</motion.p>



      </div>


    </div>
    
    
  </>)
}
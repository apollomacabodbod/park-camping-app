

import { motion } from "framer-motion"

export default function HomeFeaturedCards(){


  return (<>


    <div className="my-[4em] grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4  gap-[1.875em]">


      <div className="flex flex-col  py-[1em] px-[1em]">

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

          <div className="bg-[#F4EEA9] w-16 h-16 rounded-full relative">

            <img src="/breakfast.svg" alt="" width={31} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>

          </div>

               

        </motion.div>


        <motion.p className="font-roboto text-[1.125rem] not-italic font-semibold text-[#333] text-center mt-[1em] transition-all duration-1000 ease-in-out"
        
        
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
        
        >Breakfast Included</motion.p>

        <motion.p className="mt-[1em] text-[#333] font-inter text-[0.9375rem] text-center font-normal transiton-all duration-1000 ease-in-out"
        
        
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
        
        >Nullam semper etiam congue lacinia nuncsit quam vesti.</motion.p>

      </div>


        
        
        
      <div className="flex flex-col  py-[1em] px-[1em]">

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

          <div className="bg-[#F4EEA9] w-16 h-16 rounded-full relative">

            <img src="/parking Car.svg" alt="" width={31} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>

          </div>

       

        </motion.div>


        <motion.p className="font-roboto text-[1.125rem] not-italic font-semibold text-[#333] text-center mt-[1em] transition-all duration-1000 ease-in-out"


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

        >Free Parking</motion.p>

        <motion.p className="mt-[1em] text-[#333] font-inter text-[0.9375rem] text-center font-normal transiton-all duration-1000 ease-in-out"


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

        >Nullam semper etiam congue lacinia nuncsit quam vesti.</motion.p>

      </div>




           
      <div className="flex flex-col  py-[1em] px-[1em]">

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

          <div className="bg-[#F4EEA9] w-16 h-16 rounded-full relative">

            <img src="/Toilets.svg" alt="" width={31} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>

          </div>

       

        </motion.div>


        <motion.p className="font-roboto text-[1.125rem] not-italic font-semibold text-[#333] text-center mt-[1em] transition-all duration-1000 ease-in-out"


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

        >Toilets</motion.p>

        <motion.p className="mt-[1em] text-[#333] font-inter text-[0.9375rem] text-center font-normal transiton-all duration-1000 ease-in-out"


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

        >Nullam semper etiam congue lacinia nuncsit quam vesti.</motion.p>

      </div>







      <div className="flex flex-col  py-[1em] px-[1em]">

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

          <div className="bg-[#F4EEA9] w-16 h-16 rounded-full relative">

            <img src="/laundry.svg" alt="" width={31} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>

          </div>

       

        </motion.div>


        <motion.p className="font-roboto text-[1.125rem] not-italic font-semibold text-[#333] text-center mt-[1em] transition-all duration-1000 ease-in-out"


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

        >Washing Machines</motion.p>

        <motion.p className="mt-[1em] text-[#333] font-inter text-[0.9375rem] text-center font-normal transiton-all duration-1000 ease-in-out"


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

        >Nullam semper etiam congue lacinia nuncsit quam vesti.</motion.p>

      </div>





      <div className="flex flex-col  py-[1em] px-[1em]">

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

          <div className="bg-[#F4EEA9] w-16 h-16 rounded-full relative">

            <img src="/24 hour cutomer service.svg" alt="" width={31} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>

          </div>

       

        </motion.div>


        <motion.p className="font-roboto text-[1.125rem] not-italic font-semibold text-[#333] text-center mt-[1em] transition-all duration-1000 ease-in-out"


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

        >24 Services</motion.p>

        <motion.p className="mt-[1em] text-[#333] font-inter text-[0.9375rem] text-center font-normal transiton-all duration-1000 ease-in-out"


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

        >Nullam semper etiam congue lacinia nuncsit quam vesti.</motion.p>

      </div>




      <div className="flex flex-col  py-[1em] px-[1em]">

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

          <div className="bg-[#F4EEA9] w-16 h-16 rounded-full relative">

            <img src="/CCTV.svg" alt="" width={31} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>

          </div>

       

        </motion.div>


        <motion.p className="font-roboto text-[1.125rem] not-italic font-semibold text-[#333] text-center mt-[1em] transition-all duration-1000 ease-in-out"


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

        >Security</motion.p>

        <motion.p className="mt-[1em] text-[#333] font-inter text-[0.9375rem] text-center font-normal transiton-all duration-1000 ease-in-out"


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

        >Nullam semper etiam congue lacinia nuncsit quam vesti.</motion.p>

      </div>




      <div className="flex flex-col py-[1em] px-[1em]">

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

          <div className="bg-[#F4EEA9] w-16 h-16 rounded-full relative">

            <img src="/fitness.svg" alt="" width={31} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>

          </div>

       

        </motion.div>


        <motion.p className="font-roboto text-[1.125rem] not-italic font-semibold text-[#333] text-center mt-[1em] transition-all duration-1000 ease-in-out"


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

        >Gym</motion.p>

        <motion.p className="mt-[1em] text-[#333] font-inter text-[0.9375rem] text-center font-normal transiton-all duration-1000 ease-in-out"


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

        >Nullam semper etiam congue lacinia nuncsit quam vesti.</motion.p>

      </div>




      <div className="flex flex-col py-[1em] px-[1em]">

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

          <div className="bg-[#F4EEA9] w-16 h-16 rounded-full relative">

            <img src="/fire extinguisher.svg" alt="" width={31} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>

          </div>

       

        </motion.div>


        <motion.p className="font-roboto text-[1.125rem] not-italic font-semibold text-[#333] text-center mt-[1em] transition-all duration-1000 ease-in-out"


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

        >Firefighter</motion.p>

        <motion.p className="mt-[1em] text-[#333] font-inter text-[0.9375rem] text-center font-normal transiton-all duration-1000 ease-in-out"


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

        >Nullam semper etiam congue lacinia nuncsit quam vesti.</motion.p>

      </div>














    </div>
    
    
  </>)
}
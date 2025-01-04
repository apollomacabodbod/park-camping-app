

import { motion } from "framer-motion"

export default function HomeServicesCards(){


  return(<>



    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-[4em] gap-[1.875em] mb-[8.6875em]">



      <motion.div className="relative flex flex-col  bg-center bg-cover bg-no-repeat w-full h-[15em] rounded-[0.375em] transition-all duration-1000 ease-in-out"


 
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



            
        style={{
          backgroundImage: "url(/grey-lightweight-tent.jpg)"
        }}
      >

        <div className="absolute inset-0 bg-[rgba(16,34,29,0.60)] opacity-60"></div>


        <div className="my-auto z-10 ">


          <motion.div className="flex items-center justify-center   transition-all duration-1000 ease-in-out"
          
          
           
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

            <img src="/home-services-camping.svg" alt=""  className="w-[1.75em]"/>

          </motion.div>

          <motion.p className="text-center text-white font-roboto text-[1.125rem] not-italic font-semibold transition-all duration-1000 ease-in-out"
          
          
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
          
          
          
          
          >Camping</motion.p>


        </div>


              


      </motion.div>





      <motion.div className="relative flex flex-col  bg-center bg-cover bg-no-repeat w-full h-[15em] rounded-[0.375em]  transition-all duration-1000 ease-in-out"


 
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



            
        style={{
          backgroundImage: "url(/vines-growing.jpg)"
        }}
      >

        <div className="absolute inset-0 bg-[rgba(16,34,29,0.60)] opacity-60"></div>


        <div className="my-auto z-10 ">


          <motion.div className="flex items-center justify-center   transition-all duration-1000 ease-in-out"
          
          
           
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

            <img src="/home-services-lodge.svg" alt=""  className="w-[1.75em]"/>

          </motion.div>

          <motion.p className="text-center text-white font-roboto text-[1.125rem] not-italic font-semibold transition-all duration-1000 ease-in-out"
          
          
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
          
          
          
          
          >Lodging</motion.p>


        </div>


              


      </motion.div>



      <motion.div className="relative flex flex-col  bg-center bg-cover bg-no-repeat w-full h-[15em] rounded-[0.375em]  transition-all duration-1000 ease-in-out"


 
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



            
        style={{
          backgroundImage: "url(/garda-lake-in-summer.jpg)"
        }}
      >

        <div className="absolute inset-0 bg-[rgba(16,34,29,0.60)] opacity-60"></div>


        <div className="my-auto z-10 ">


          <motion.div className="flex items-center justify-center   transition-all duration-1000 ease-in-out"
          
          
           
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

            <img src="/home-services-harbor.svg" alt=""  className="w-[1.75em]"/>

          </motion.div>

          <motion.p className="text-center text-white font-roboto text-[1.125rem] not-italic font-semibold transition-all duration-1000 ease-in-out"
          
          
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
          
          
          
          
          >Harbor</motion.p>


        </div>


              


      </motion.div>




      <motion.div className="relative flex flex-col  bg-center bg-cover bg-no-repeat w-full h-[15em] rounded-[0.375em]  transition-all duration-1000 ease-in-out"


 
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



            
        style={{
          backgroundImage: "url(/an-attractive.jpg)"
        }}
      >

        <div className="absolute inset-0 bg-[rgba(16,34,29,0.60)] opacity-60"></div>


        <div className="my-auto z-10 ">


          <motion.div className="flex items-center justify-center  transition-all duration-1000 ease-in-out"
          
          
           
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

            <img src="/home-services-event.svg" alt=""  className="w-[1.75em]"/>

          </motion.div>

          <motion.p className="text-center text-white font-roboto text-[1.125rem] not-italic font-semibold transition-all duration-1000 ease-in-out"
          
          
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
          
          
          
          
          >Event</motion.p>


        </div>


              


      </motion.div>



        









    </div>
    
    
  </>)
}
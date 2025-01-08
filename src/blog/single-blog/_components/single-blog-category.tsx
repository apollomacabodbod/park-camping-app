

import { motion } from "framer-motion"

export default function SingleBlogCategory(){

  return(<>


    <div className="flex flex-col  mt-[4em]">


      <div className="lg:flex lg:items-center lg:justify-between p-[1em] ">



        <div className="flex flex-col ">


          <div className="sm:flex sm:items-center sm:gap-[1em] " >

            <motion.p className="text-[#CA6702] font-roboto not-italic font-bold capitalize transition-all duration-1000 ease-in-out"
            
            
            
               
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
            
            >Business,</motion.p>
            <motion.p className="text-[#CA6702] font-roboto not-italic font-bold capitalize transition-all duration-1000 ease-in-out"
            
            
               
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
            
            
            >Technology,</motion.p>
            <motion.p className="text-[#CA6702] font-roboto not-italic font-bold capitalize transition-all duration-1000 ease-in-out"
            
            
                         
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
            
            
            
            >Food,</motion.p>
            <motion.p className="text-[#CA6702] font-roboto not-italic font-bold capitalize transition-all duration-1000 ease-in-out"
            
            
                              
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
            
            
            
            >Programming,</motion.p>
            <motion.p className="text-[#CA6702] font-roboto not-italic font-bold capitalize transition-all duration-1000 ease-in-out"
            
            
            
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
            
            
            >Designer</motion.p>


          </div>


        </div>




        <div className="flex flex-col">

          <div className="flex items-center  gap-[1em] mt-[1em] lg:mt-[0em]">




            <motion.p className="whitespace-nowrap transition-all duration-1000 ease-in-out"
            
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
            
            
            
            >Share this :</motion.p>
            <motion.img src="/single-blog-facebook.svg" alt="" className="transition-all duration-1000 ease-in-out"
            
            
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
            <motion.img src="/single-blog-twitter.svg" alt="" className="transition-all duration-1000 ease-in-out"
            
            
            
               
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
            <motion.img src="/single-blog-instragram.svg" alt="" className="transition-all duration-1000 ease-in-out"
            
            
            
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
            <motion.img src="/single-blog-youtube.svg" alt="" className="transition-all duration-1000 ease-in-out"
            
            
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

             





      </div>


    </div>
  </>)
}
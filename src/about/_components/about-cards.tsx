
import { motion } from "framer-motion"
import AboutStatsCards from "./about-stats-cards"
import AboutRecognitionsCards from "./about-recognition-cards"
import HomeRecognitions from "./about-recognition"


export default function AboutCards(){


  return(<>


    <div className="grid custom-846:grid-cols-2 gap-[1.875em] border border-[#50B498] green mt-[5em]" >



      <div className="flex flex-col border border-[#50B498] green ">


        <motion.div className="flex items-center  gap-[0.625em] transition-all duration-1000 ease-in-out"
      
       
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


          <img src="/home-places.svg" alt="" />

          <p className="text-[#CA6702] leading-normal font-open-sans tracking-[0.125em] text-[0.9375rem] not-italic font-bold uppercase">about</p>

          <img src="/home-places.svg" alt="" />


        </motion.div>



        <motion.p className="text-[#333] font-roboto text-[2.25rem] not-italic font-semibold transition-all duration-1000 ease-in-out"
      
             
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
    
    
        >About Ranger</motion.p>



        <motion.p className="text-[#333] font-inter text-[0.9375rem] not-italic font-normal  mt-[1em] transition-all duration-1000 ease-in-out"
        
        
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



        <motion.p className="text-[#333] font-inter text-[0.9375rem] not-italic font-normal mt-[2em] transition-all duration-1000 ease-in-out"
        
        
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
        
        
        >Pretium quam lacus interdum ultrices velit elementum idicul netus faucibus. Venenatis quam diam nisi id viverra dui proin quisque. Ridiculus adipiscing massa at amet, mi at auctor onec vestibulum</motion.p>

        <motion.p className="text-[#333] font-inter text-[0.9375rem] not-italic font-normal mt-[2em] transition-all duration-1000 ease-in-out"
        
        
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
        
        
        
        >Pretium quam lacus interdum ultrices velit elementum idicul netus faucibus. Venenatis quam diam nisi id viverra dui proin quisque. Ridiculus adipiscing massa at amet, mi at auctor onec vestibulum</motion.p>





        <div className="flex flex-col mt-[8em] border border-[#50B498] green  p-[1em]  lg:p-[2.5em] xl:p-[4em]">


          <motion.div className="flex items-center  gap-[0.625em] transition-all duration-1000 ease-in-out"


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


            <img src="/home-places.svg" alt="" />

            <p className="text-[#CA6702] leading-normal font-open-sans tracking-[0.125em] text-[0.9375rem] not-italic font-bold uppercase">stats</p>

            <img src="/home-places.svg" alt="" />


          </motion.div>



          <motion.p className="text-[#333]  font-roboto text-[1.8rem]  lg:text-[1.6rem] xl:text-[2.25rem] not-italic font-semibold transition-all duration-1000 ease-in-out"
      
             
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


          >Ranger State Park in Stats</motion.p>



          <p className="text-[#333] font-inter text-[0.9375rem] not-italic font-normal mt-[1em]">Nullam semper etiam congue lacinia nunc, sit. Quam vel vestibulum
faucibus dolor non semper leo quis. Pretium quam lacus.</p>



          <AboutStatsCards/>


        </div>


        




      </div>


      <div className="flex flex-col">


        <div className="flex items-center border border-[#50B498] green">

          <img src="/fun-in-camp.jpg" alt="" className="w-full h-[38.625em] border border-[#50B498] green object-cover rounded-[0.25em]"/>


        </div>



        <div className="flex flex-col">


          <HomeRecognitions/>
          <AboutRecognitionsCards/>


        </div>

        




      </div>

      





    </div>
    
    
    
  </>)
}
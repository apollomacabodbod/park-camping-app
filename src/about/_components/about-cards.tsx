
import { motion } from "framer-motion"


export default function AboutCards(){


  return(<>


    <div className="grid grid-cols-2 gap-[1.875em] border border-[#50B498] green mt-[5em]" >



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

          <p className="text-[#CA6702] leading-normal font-open-sans tracking-[0.125em] text-[0.9375rem] not-italic font-bold uppercase">Places to Go</p>

          <img src="/home-places.svg" alt="" />


        </motion.div>



        <motion.p className="text-[#333]  font-roboto text-[2.25rem] not-italic font-semibold transition-all duration-1000 ease-in-out"
      
             
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



        <p className="text-[#333] font-inter text-[0.9375rem] not-italic font-normal ">Nullam semper etiam congue lacinia nunc, sit. Quam vel vestibulum
    faucibus dolor non semper leo quis. Pretium quam lacus.</p>



        <p className="text-[#333] font-inter text-[0.9375rem] not-italic font-normal mt-[2em]">Pretium quam lacus interdum ultrices velit elementum idicul netus faucibus. Venenatis quam diam nisi id viverra dui proin quisque. Ridiculus adipiscing massa at amet, mi at auctor onec vestibulum</p>

        <p className="text-[#333] font-inter text-[0.9375rem] not-italic font-normal mt-[2em]">Pretium quam lacus interdum ultrices velit elementum idicul netus faucibus. Venenatis quam diam nisi id viverra dui proin quisque. Ridiculus adipiscing massa at amet, mi at auctor onec vestibulum</p>





        <div className="flex flex-col mt-[8em]">


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

            <p className="text-[#CA6702] leading-normal font-open-sans tracking-[0.125em] text-[0.9375rem] not-italic font-bold uppercase">Places to Go</p>

            <img src="/home-places.svg" alt="" />


          </motion.div>






        </div>




      </div>


      <div className="flex flex-col">


        <div className="flex items-center border border-[#50B498] green">

          <img src="/fun-in-camp.jpg" alt="" className="w-full h-[38.625em] border border-[#50B498] green object-cover rounded-[0.25em]"/>


        </div>




      </div>

      





    </div>
    
    
    
  </>)
}
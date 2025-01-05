
import { motion } from "framer-motion"

export default function ServicesTeam(){

  return(<>



    <div className="grid grid-cols-1 md:grid-cols-2 border border-[#50B498] green gap-[4em] my-[5em]">


      <div className="flex flex-col border border-[#50B498] green py-[5.9375em]">


        <motion.div className="flex items-center  gap-[0.625em] transition-all duration-1000 ease-in-out border border-[#50B498] green"
      
      
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

          <p className="text-[#CA6702] leading-normal font-open-sans tracking-[0.125em] text-[0.9375rem] not-italic font-bold uppercase">team</p>

          <img src="/home-places.svg" alt="" />


        </motion.div>




        <motion.p className="text-[#333]  font-roboto text-[2.25rem] not-italic font-semibold transition-all duration-1000 ease-in-out border border-[#50B498] green"
      
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
      
      
        >Meet Our Team</motion.p>


        <motion.p className="text-[#333] mt-[1em] font-inter text-[0.9375rem]  font-normal  transition-all duration-1000 ease-in-out"
      
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
      
      
      
        >Nullam semper etiam congue lacinia nuncesit quam vel vestibulum faucibus dolor non semper leo quis pretium quam lacus.</motion.p>






      </div>





      <div className="grid grid-cols-2 border border-[#50B498] green gap-[1.875em]">



        <div className="flex flex-col border border-[#50B498] green">


          <div className="flex items-center border border-[#50B498] green">

            <img src="/handsome-businessman.jpg" alt="" className="w-full h-[17.5em] object-cover "/>

          </div>


                

          <p className="text-center mt-[2em] font-roboto text-[1.125rem] not-italic font-semibold text-[#333]">Peter Harvey</p>
          <p className="text-center text-[#CA6702] font-inter text-[0.9375rem] not-italic font-normal ">Founder Ranger</p>


        </div>




        <div className="flex flex-col border border-[#50B498] green">


          <div className="flex items-center border border-[#50B498] green">

            <img src="/businesswoman-sitting.jpg" alt="" className="w-full h-[17.5em] object-cover object-top "/>

          </div>




          <p className="text-center mt-[2em] font-roboto text-[1.125rem] not-italic font-semibold text-[#333]">Peter Harvey</p>
          <p className="text-center text-[#CA6702] font-inter text-[0.9375rem] not-italic font-normal ">Founder Ranger</p>


        </div>



      </div>



        




    </div>
    
    
  </>)
}
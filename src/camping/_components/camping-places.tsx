


import { motion } from "framer-motion"

export default function CampingPlaces(){

  return (<>


    <div className="flex flex-col mt-[4.5em]">


      <motion.div className="flex items-center justify-center gap-[0.625em] transition-all duration-1000 ease-in-out"
      
       
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

      <motion.p className="text-[#333] text-center font-roboto text-[2.25rem] not-italic font-semibold transition-all duration-1000 ease-in-out"
      
             
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
      
      
      >Explore Ranger State Park</motion.p>


      <motion.p className="text-[#333] font-inter text-[0.9375rem] font-normal text-center transiition-all duration-1000 ease-in-out"
      
      
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
      
      
      >Nullam semper etiam congue lacinia nuncesit quam vel vestibulum<br></br>
     faucibus dolor non semper leo quis pretium quam lacus.</motion.p>

    </div>
    
    
    
  </>)
}
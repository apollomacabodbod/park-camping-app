

import { motion } from "framer-motion"

export default function SingleBlogCardOne(){

  return(<>


    <div className="grid sm:grid-cols-2 mt-[2em] gap-[1.875em] border border-[#50B498] green">


      <div className="flex flex-col border border-[#50B498] green gap-[1em]">


        <motion.p className="text-[#1E334B] font-roboto text-[1.5rem] not-italic font-semibold leading-[1em] transition-all duration-1000 ease-in-out"
        
        
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
        
        
        >Lorem ipsum dolor sit amet, consec tetuer.</motion.p>

        <motion.p className="text-[#1E334B] font-inter text-[0.9375rem] not-italic font-normal transition-all duration-1000 ease-in-out"
        
        
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
        
        
        >Bibendum sit pharetra vitae pellentesque sodales neque mollis oci, purus. Feugiat volutp eu velit purus enim cum. Eu ipsum vierra isse placerat leo. Libero vel mi porttitor luctus viverra a vel veicula ultricies. Tellus egestas ac in sit et quis vitae. Metus auctor.</motion.p>

       
       
        <motion.p className="text-[#1E334B] font-roboto text-[1.5rem] not-italic font-semibold transition-all duration-1000 ease-in-out"
        
        
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
        
        
        
        >Eget ultrices evelit pellentesque tortor facilisis.</motion.p>
       
       
        <motion.p className="text-[#1E334B] font-inter text-[0.9375rem] not-italic font-normal transition-all duration-1000 ease-in-out"
        
        
        
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
        
        
        
        >Bibendum sit pharetra vitae pellentesque sodales neque mollis oci, purus. Feugiat volutp eu velit purus enim cum. Eu ipsum vierra isse placerat leo. Libero vel mi porttitor luctus viverra a vel veicula ultricies. Tellus egestas ac in sit et quis vitae. Metus auctor.</motion.p>
       
      </div>



      <div className="flex flex-col">



        <div className="flex items-center">


          <motion.img src="/dome-tents.jpg" alt="" className="w-full h-[21.25em] object-cover rounded-[0.125em] transition-all duration-1000 ease-in-out"
          
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



    



    
  </>)
}
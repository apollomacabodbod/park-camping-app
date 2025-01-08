
import { motion } from "framer-motion"

export default function SingleBlogPostButton(){


  return(<>



    <motion.div className="flex items-center justify-center border border-[#50B498] green mb-[2em] cursor-pointer transition-all duration-1000 ease-in-out"
    
    
    
        
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


      <div className="flex flex-col bg-[#389844]">

        <div className="flex items-center py-[1em] px-[2em] rounded-[0.25em] gap-[0.625em]">

          <p className="text-white font-roboto text-[0.9375rem] not-italic font-bold capitalize">Post Comment</p>
          <img src="/single-blog-arrow.svg" alt="" />

        </div>

      </div>


    </motion.div>

    
    
  </>)
}
import { motion } from "framer-motion"
import ReactPlayer from "react-player"


export default function AboutActivtiesVideo(){


  return(<>


    <div className="flex flex-col mt-[4em] mb-[6.25em]">


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


        <ReactPlayer
          url={'https://www.youtube.com/watch?v=Bp-27oOhulg'}
          playing
          loop
          muted
        >


        </ReactPlayer>
            
            
            
      </motion.div> 


    </div>
    
    
  </>)
}
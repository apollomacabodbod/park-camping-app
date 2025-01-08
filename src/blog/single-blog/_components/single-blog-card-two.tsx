import { motion } from "framer-motion"


export default function SingleBlogCardTwo(){


  return(<>


    <div className="grid sm:grid-cols-2 gap-[1.875em] mt-[2em]">


      <div className="flex flex-col ">


        <motion.div className="flex items-center transition-all duration-1000 ease-in-out"
        
        
            
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
          <img src="/fun-in-camp.jpg" alt="" className="w-full h-[21.25em] object-cover rounded-[0.125em]"/>
        </motion.div>


      </div>



      <div className="flex flex-col ">

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
          
        
        >Pellentesque augue diam augue lectus.</motion.p>

        <motion.p className="text-[#1E334B] font-inter text-[0.9375rem] not-italic font-normal mt-[1em] transition-all duration-1000 ease-in-out"
        
        
          
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
        
        
        <motion.p className="text-[#1E334B] font-inter text-[0.9375rem] not-italic font-normal mt-[1em] transition-all duration-1000 ease-in-out"
        
        
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
          
        
        
        >Bibendum leo, sapien, nisl bibendum. Ultricies urna ultricies risus, at. Risus tincidunt netus et pellentesque maecenas pulvinar. Arcu duis tortor turpis nunc, nunc est blandit. Vel volutpat purus mauris uis nisl enim molestie felis. Tincidunt ornare facilisis interdum ipsum.</motion.p>
        
      </div>



    </div>
    
  </>)
}


import { motion } from "framer-motion"

export default function SingleBlogDetails(){


  return(<>



    <div className="flex flex-col mt-[4.375em] ">


      <motion.p className="text-[#1E334B] text-roboto text-[1.5rem] not-italic font-semibold transiiton-all duration-1000 ease-in-out"
      
      
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
      
      >Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</motion.p>

      <motion.p className="text-[#1E334B] font-inter text-[0.9375rem] not-italic font-normal mt-[2em] transition-all duration-1000 ease-in-out"
      
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
      
      
      
      >Bibendum leo, sapien, nisl bibendum. Ultricies urna ultricies risus, at. Risus tincidunt netus et pellentesque maecenas pulvinar. Arcu duis tortor turpis nunc, nunc est blandit. Vel volutpat purus mauris condimentum amet tellus scelerisque semper blandit. Feugiat accumsan blandit acu, integer faucibus. At cursus elit hac vitae nec tortor iaculis viverra. Sem aliquet vulputate metus tristique sem commodo faucibus. Sagittis sittis eget at sit posuere est at. Eget eget id iaculis at est cras tristique sit. Nunc sem magna morbi vitae tempus sed consequat. Urna tellus id tique mattis molestie lectus imperdiet. Facilisi suscipit mauris nisl nibh felis pellentesque. Tempus et vitae, at quis nisl enim molestie felis. Tincidunt ornare facilisis interdum ipsum.</motion.p>

    </div>
    
  </>)
}
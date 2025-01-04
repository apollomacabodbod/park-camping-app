
import { motion } from "framer-motion"


export default function HomeDealsCards(){


  return (<>


    <div className="grid grid-cols-1  lg:grid-cols-3  gap-[1.875em] mb-[6.25em]">


      <div className="flex flex-col ">



        <motion.div className="flex items-center justify-center transition-all duration-1000 ease-in-out"
        
        
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

          <img src="/camping-in.jpg" alt=""  className="w-full object-cover rounded-[0.25em] h-[18.75em]"/>


        </motion.div>


        <div className="flex items-center justify-between mt-[1em]">


          <motion.p className="text-[#333] font-roboto text-[1.125rem] not-italic font-semibold transition-all duration-1000 ease-in-out "
          
          
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
          
          
          
          >Camping in steppe</motion.p>

          <motion.p className="text-[#EB5757] font-roboto text-[1.125rem] not-italic font-semibold transition-all duration-1000 ease-in-out"
          
          
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
          
          
          
          >$100,00</motion.p>

             

        </div>



        <motion.p className="text-[#333] font-roboto text-[0.9375rem] not-italic font-normal mt-[1em] transition-all duration-1000 ease-in-out"
        
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
        
        
        >Nullam semper etiam congue lacinia nuncsit quam vestibulum faucibus dolor semper.</motion.p>
        


        <div className="flex items-center justify-between mt-[1em]">


          <div className="flex items-center justify-between gap-[1em]">

            <motion.img src="/home-deals-rating.svg" alt="" className="transition-all duration-1000 ease-in-out"
            
            
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

            <motion.p className="text-[rgba(16,34,29,0.60)] font-roboto text-[0.75rem] not-italic font-normal transition-all duration-1000 ease-in-out"
            
            
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
            
            
            
            >104 Reviews</motion.p>


          </div>




          <motion.div className="flex items-center justify-between bg-[#389844] py-[0.5em] px-[1em] rounded-[0.25em] gap-[0.625em] transition-all duration-1000 ease-in-out"
          
          
            
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


            <p className="text-white font-roboto text-[0.9375rem] not-italic font-bold capitalize">View Offer</p>

            <img src="/home-deals-arrow.svg" alt="" />
               
                
          </motion.div>

         


        </div>



      </div>





     
      <div className="flex flex-col ">



        <motion.div className="flex items-center justify-center transition-all duration-1000 ease-in-out"
        
        
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

          <img src="/dome-tents.jpg" alt=""  className="w-full object-cover rounded-[0.25em] h-[18.75em]"/>


        </motion.div>


        <div className="flex items-center justify-between mt-[1em]">


          <motion.p className="text-[#333] font-roboto text-[1.125rem] not-italic font-semibold transition-all duration-1000 ease-in-out "
          
          
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
          
          
          
          >Camping in steppe</motion.p>

          <motion.p className="text-[#EB5757] font-roboto text-[1.125rem] not-italic font-semibold transition-all duration-1000 ease-in-out"
          
          
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
          
          
          
          >$100,00</motion.p>

             

        </div>



        <motion.p className="text-[#333] font-roboto text-[0.9375rem] not-italic font-normal mt-[1em] transition-all duration-1000 ease-in-out"
        
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
        
        
        >Nullam semper etiam congue lacinia nuncsit quam vestibulum faucibus dolor semper.</motion.p>
        


        <div className="flex items-center justify-between mt-[1em]">


          <div className="flex items-center justify-between gap-[1em]">

            <motion.img src="/home-deals-rating.svg" alt="" className="transition-all duration-1000 ease-in-out"
            
            
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

            <motion.p className="text-[rgba(16,34,29,0.60)] font-roboto text-[0.75rem] not-italic font-normal transition-all duration-1000 ease-in-out"
            
            
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
            
            
            
            >104 Reviews</motion.p>


          </div>




          <motion.div className="flex items-center justify-between bg-[#389844] py-[0.5em] px-[1em] rounded-[0.25em] gap-[0.625em] transition-all duration-1000 ease-in-out"
          
          
            
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


            <p className="text-white font-roboto text-[0.9375rem] not-italic font-bold capitalize">View Offer</p>

            <img src="/home-deals-arrow.svg" alt="" />
               
                
          </motion.div>

         


        </div>



      </div>







      <div className="flex flex-col ">



        <motion.div className="flex items-center justify-center transition-all duration-1000 ease-in-out"
        
        
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

          <img src="/female-enjoying.jpg" alt=""  className="w-full object-cover rounded-[0.25em] h-[18.75em]"/>


        </motion.div>


        <div className="flex items-center justify-between mt-[1em]">


          <motion.p className="text-[#333] font-roboto text-[1.125rem] not-italic font-semibold transition-all duration-1000 ease-in-out "
          
          
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
          
          
          
          >Camping in steppe</motion.p>

          <motion.p className="text-[#EB5757] font-roboto text-[1.125rem] not-italic font-semibold transition-all duration-1000 ease-in-out"
          
          
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
          
          
          
          >$100,00</motion.p>

             

        </div>



        <motion.p className="text-[#333] font-roboto text-[0.9375rem] not-italic font-normal mt-[1em] transition-all duration-1000 ease-in-out"
        
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
        
        
        >Nullam semper etiam congue lacinia nuncsit quam vestibulum faucibus dolor semper.</motion.p>
        


        <div className="flex items-center justify-between mt-[1em]">


          <div className="flex items-center justify-between gap-[1em]">

            <motion.img src="/home-deals-rating.svg" alt="" className="transition-all duration-1000 ease-in-out"
            
            
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

            <motion.p className="text-[rgba(16,34,29,0.60)] font-roboto text-[0.75rem] not-italic font-normal transition-all duration-1000 ease-in-out"
            
            
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
            
            
            
            >104 Reviews</motion.p>


          </div>




          <motion.div className="flex items-center justify-between bg-[#389844] py-[0.5em] px-[1em] rounded-[0.25em] gap-[0.625em] transition-all duration-1000 ease-in-out"
          
          
            
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


            <p className="text-white font-roboto text-[0.9375rem] not-italic font-bold capitalize">View Offer</p>

            <img src="/home-deals-arrow.svg" alt="" />
               
                
          </motion.div>

         


        </div>



      </div>


     



    </div>
    
    
  </>)
}
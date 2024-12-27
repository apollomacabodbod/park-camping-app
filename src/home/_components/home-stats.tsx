import { motion } from "framer-motion";


export default function HomeStats(){


  return(<>


    <div className="flex flex-col bg-[rgba(56,152,68,0.90)] pt-[5em] lg:pt-[9.095em] pb-[9.905em]  px-[1.25em] lg:pl-[4em] lg:pr-[10em]  max-w-[1200px]   border border-[#50B498] green">



      <div className="flex flex-col">

        <div className="flex items-center  gap-[0.625em] ">

          <motion.img src="/home-ranger-camp.svg" alt="" width={27}  className="transition-all duration-1000 ease-in-out"

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

          <motion.p className="text-[#F4EEA9]  font-roboto text-[0.9375rem] not-italic font-bold uppercase transition-all duration-1000 ease-in-out"


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
  

          >stats</motion.p>

          <motion.img src="/home-ranger-camp.svg" alt="" width={27} className="transition-all duration-1000 ease-in-out"

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





        <p className="text-white font-roboto text-[2.25rem] not-italic font-semibold ">Ranger State Park in Stats</p>

        <p className="text-white font-inter text-[0.9375rem] not-italic font-normal ">Nullam semper etiam congue lacinia nunc, sit. Quam vel vestibulum faucibus dolor non semper leo quis.</p>

    


      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 mt-[1.875em] gap-[1.875em]">

        <div className="flex flex-col py-[1em] px-[1em] bg-white rounded-[0.25em]">

          <p className="text-center font-roboto text-[2.25rem] not-italic font-semibold ">105+</p> 

          <p className="text-center font-roboto text-[0.75rem] font-normal leading-normal text-[rgba(16,34,29,0.60)]">Campsites</p>


        </div>


        <div className="flex flex-col py-[1em] px-[1em] bg-white rounded-[0.25em]">

          <p className="text-center font-roboto text-[2.25rem] not-italic font-semibold ">30+</p> 

          <p className="text-center font-roboto text-[0.75rem] font-normal leading-normal text-[rgba(16,34,29,0.60)]">Campsites</p>


        </div>



        <div className="flex flex-col py-[1em] px-[1em] bg-white rounded-[0.25em]">

          <p className="text-center font-roboto text-[2.25rem] not-italic font-semibold ">1,3M</p> 

          <p className="text-center font-roboto text-[0.75rem] font-normal leading-normal text-[rgba(16,34,29,0.60)]">Reservations</p>


        </div>




        <div className="flex flex-col py-[1em] px-[1em] bg-white rounded-[0.25em]">

          <p className="text-center font-roboto text-[2.25rem] not-italic font-semibold ">70+</p> 

          <p className="text-center font-roboto text-[0.75rem] font-normal leading-normal text-[rgba(16,34,29,0.60)]">Year of camping</p>


        </div>








  



      </div>
   


    
    </div>





    
    
  </>)
}
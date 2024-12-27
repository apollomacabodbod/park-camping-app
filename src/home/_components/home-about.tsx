
import { motion } from "framer-motion";

export default function HomeAbout(){

  return(<>




    <div className="flex flex-col bg-[rgba(16,34,29,0.60)] pt-[5em] lg:pt-[9.095em] pb-[9.905em] px-[1.25em] lg:pl-[10em] max-w-[1200px]   border border-[#50B498] green" >

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
  

        >ranger camp</motion.p>

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



      <p className="text-white font-roboto text-[2.25rem] not-italic font-semibold leading-[1em] mt-[0.2em]">About Ranger</p>



      <p className="text-white font-inter text-[0.9375rem] not-italic font-normal mt-[1em]">Nullam semper etiam congue lacinia nunc, sit. Quam vel vestibulum
faucibus dolor non semper leo quis. Pretium quam lacus.</p>


      <p className="text-white font-inter text-[0.9375rem] mt-[2em] not-italic font-normal ">Pretium quam lacus interdum ultrices velit elementum idicul netus faucibus. Venenatis quam diam nisi id viverra dui proin quisque. Ridiculus adipiscing massa at amet, mi at auctor onec vestibulum</p>






      <div className="flex items-center  mt-[2em]">

        <div className="flex flex-col border  border-[#F4EEA9] rounded-[0.25em] transition-opacity duration-1000 ease-in-out active:scale-95 active:transition-transform active:duration-200 active:ease-out cursor-pointer">


          <div className="flex items-center gap-[0.625em] py-[1em] px-[2em]">

            <p className="font-roboto text-[#F4EEA9] text-[0.9375rem] font-bold uppercase">Learn more</p>

            <img src="/home-learn-more.svg" alt="" width={14}/>


          </div>


        </div>


      </div>



    </div>





    
    
  </>)
}
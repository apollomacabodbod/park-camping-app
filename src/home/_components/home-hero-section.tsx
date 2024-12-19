import HomeDropDownAdults from "./home-dropdown-adults";
import HomeDropDownChildren from "./home-dropdown-children";
import HomeDropdownRooms from "./home-dropdown-rooms";


import { motion } from "framer-motion";
import { DatePickerCheckOut } from "src/home/_components/home-date-checkout";
import { DatePickerCheckIn } from "src/home/_components/home-date-checkin";



export default function HomeHeroSection(){

 



  return (<>



    <div className="grid grid-cols-1 lg:grid-cols-2 z-10 max-w-[1200px] lg:mx-auto px-[1.25em] my-[9em] gap-[1.875em]  ">



      <div className="flex flex-col   " >


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


        <motion.p className="text-white font-roboto text-[3.8rem] mt-[0.05em] lg:text-[4.5rem] leading-[1em] font-bold transition-all duration-1000 ease-in-out"
        
        
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
          
        
        
        >Welcome to Ranger State Park & Lodge</motion.p>




        <motion.p className="text-white font-inter text-[0.9375rem] not-italic font-normal my-[2em] transition-all duration-1000 ease-in-out"
        
        
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
          
        
        >Nullam semper etiam congue lacinia nuncsit quam vel vestibulum faucibus dolor non semper leo quis retium quam lacus interdum ultrices velit elementum.</motion.p>



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

          <div className="flex flex-col border  border-[#F4EEA9] rounded-[0.25em] transition-opacity duration-1000 ease-in-out active:scale-95 active:transition-transform active:duration-200 active:ease-out cursor-pointer">


            <div className="flex items-center gap-[0.625em] py-[1em] px-[2em]">

              <p className="font-roboto text-[#F4EEA9] text-[0.9375rem] font-bold uppercase">Learn more</p>

              <img src="/home-learn-more.svg" alt="" width={14}/>


            </div>

 

          </div>


        </motion.div>






      </div>







      <motion.div className="flex flex-col bg-white  lg:h-[17.875em] py-[2em] px-[2em] lg:px-[2em] mt-[2em] lg:mt-[0em] rounded-[0.25em] transition-all duration-1000 ease-in-out"
      
         
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


        <div className="lg:flex lg:items-center  lg:gap-[1.5em] xl:gap-[1em]  ">


          <motion.div className="relative flex flex-col w-full transition-all duration-1000 ease-in-out"
          
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
            {/* Trigger div */}
            {/* <div className="flex items-center justify-between  border-b-2 border-b-[rgba(16,34,29,0.60)] py-[1em] border border-[#50B498] green ">
              <p className="whitespace-nowrap text-[rgba(16,34,29,0.60)] font-open-sans text-[0.9375rem] not-italic font-normal">
                {selectedDate || "Check-in"}
              </p>
              <img src="/home-book-now.svg" alt="" width={14}  />
            </div> */}

            {/* Native date picker */}
            {/* <input
              type="date"
              id="nativeDatePicker"
              className="absolute inset-0 opacity-0  "
              onChange={handleDateChange}
            /> */}

            <DatePickerCheckIn/>
          </motion.div>




          <motion.div className="relative flex flex-col w-full transition-all duration-1000 ease-in-out"
          
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
            {/* Trigger div */}
            {/* <div className="flex items-center justify-between  border-b-2 border-b-[rgba(16,34,29,0.60)] py-[1em] border border-[#50B498] green">
              <p className="whitespace-nowrap text-[rgba(16,34,29,0.60)] font-open-sans text-[0.9375rem] not-italic font-normal">
                {selectedDateTwo || "Check-out"}
              </p>
              <img src="/home-book-now.svg" alt="" width={14}  />
            </div> */}

            {/* Native date picker */}
            {/* <input
              type="date"
              id="nativeDatePicker"
              className="absolute inset-0 opacity-0   "
              onChange={handleDateChangeTwo}
            /> */}

            <DatePickerCheckOut/>

          </motion.div>




        </div>



        <div className="sm:flex sm:items-center sm:gap-[1em] mt-[2em] sm:mt-[1em]">



          <HomeDropDownAdults/>


          <HomeDropDownChildren/>


          <HomeDropdownRooms/>







        </div>








        <motion.div className="flex items-center  mt-[2em] transition-all duration-1000 ease-in-out"
        
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

          <div className="flex flex-col w-full   bg-[#389844] rounded-[0.25em] transition-opacity duration-1000 ease-in-out active:scale-95 active:transition-transform active:duration-200 active:ease-out cursor-pointer">


            <div className="flex items-center gap-[0.625em] py-[1em] px-[2em] justify-center">

              <p className="font-roboto text-white text-[0.9375rem] font-bold uppercase ">Book now</p>

              <img src="/home-book-now-left.svg" alt="" width={14}/>


            </div>

 

          </div>


        </motion.div>


  




      </motion.div>







    </div>




    
    
    
    
  </>)
}